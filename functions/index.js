const functions = require("firebase-functions");
const admin = require('firebase-admin');
const speech = require('@google-cloud/speech');
const language = require('@google-cloud/language');
const vision = require('@google-cloud/vision');

admin.initializeApp();

const files = admin.firestore().collection('files');

const speechClient = new speech.SpeechClient();
const languageClient = new language.LanguageServiceClient();
const visionClient = new vision.ImageAnnotatorClient();

const runOCR = async fileItem => {
  const { id } = fileItem;
  const { owner } = fileItem.data()
  const gcsUri = `gs://studypal-f122c.appspot.com/files/${owner}/${id}`;
  functions.logger.log('Running Optical character recognition', fileItem, gcsUri);

  const [result] = await visionClient.textDetection(gcsUri);
  const detections = result.textAnnotations;
  let transcription = '';
  console.log('Text:');
  detections.forEach(text => {
    console.log(text);
    if (text.description)
      transcription += ` ${text.description}`;
  });

  console.log(`Transcription: ${transcription}`);
  const keyWords = await keyWordAnalysis(fileItem, transcription);
  return {transcription, keyWords};
}

const runSTT = async fileItem => {
  const { id } = fileItem;
  const { owner } = fileItem.data()
  const gcsUri = `gs://studypal-f122c.appspot.com/files/${owner}/${id}`;
  functions.logger.log('Running Speech to text', fileItem, gcsUri);

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const gcsUri = 'gs://my-bucket/audio.raw';
  // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  // const sampleRateHertz = 16000;
  // const languageCode = 'BCP-47 language code, e.g. en-US';

  const config = {
    encoding: "LINEAR16",
    //sampleRateHertz: 16000,
    languageCode: "en-US",
  };

  const audio = {
    uri: gcsUri,
  };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file. This creates a recognition job that you
  // can wait for now, or get its result later.
  const [operation] = await speechClient.longRunningRecognize(request);
  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
  /*files.doc(`${id}`).update({
    'transcription': transcription
  });*/
  const keyWords = await keyWordAnalysis(fileItem, transcription);
  return {transcription, keyWords};
}

const keyWordAnalysis = async (fileItem, text = null) => {
  const { id } = fileItem;
  const { owner } = fileItem.data()

  let document = text ? { content: text } : {gcsContentUri: `gs://studypal-f122c.appspot.com/files/${owner}/${id}`};
  document.type = 'PLAIN_TEXT';

  // Detects entities in the document
  const [result] = await languageClient.analyzeEntities({ document });
  const entities = result.entities;

  const output = []

  console.log('Entities:');
  entities.slice(0, (entities.length > 10) ? 10 : undefined).forEach(({ name, type, salience, metadata, ...others }) => {
    console.log(name);
    console.log(` - Type: ${type}, Salience: ${salience}`);
    if (metadata && metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${metadata.wikipedia_url}`);
    }
    output.push({ name, type, salience, metadata });
  });

  console.log('Writing back to firestore?')
  let updates = {'keywords': output};
  if (text)
    updates['transcription'] = text;

  console.log('Writing back to firestore')
  files.doc(`${id}`).update(updates);

  return output;
};

exports.triggerSTT = functions.https.onRequest(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    return res.status(204).send('');
  }

  const fileId = req.query.fileId;

  if (!fileId) {
    return res.json({ result: `You didn't specify a fileId` }).status(400);
  }

  const file = await files.doc(`${fileId}`).get();

  if (!file.exists) {
    return res.json({ result: `File not found ${fileId}` }).status(404);
  }

  const result = await (fileId.endsWith('.wav') ? runSTT(file) : runOCR(file));

  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  res.json({ result });
});