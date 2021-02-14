const functions = require("firebase-functions");
const admin = require('firebase-admin');
const speech = require('@google-cloud/speech');

admin.initializeApp();

const files = admin.firestore().collection('files');

const client = new speech.SpeechClient();

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
  const [operation] = await client.longRunningRecognize(request);
  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
  files.doc(`${id}`).update({
    'content': transcription
  });
  return transcription;
}

exports.triggerSTT = functions.https.onRequest(async (req, res) => {

  const fileId = req.query.fileId;

  if (!fileId) {
    res.json({result: `You didn't specify a fileId`});
    return;
  }

  if (!fileId.endsWith('.wav')) {
    res.json({result: `This is not a wav file`});
    return;
  }

  const file = await files.doc(`${fileId}`).get();

  if (!file.exists) {
    res.json({result: `File not found ${fileId}`});
  }

  const transcription = await runSTT(file)

  res.json({result: `Triggered with ID: ${fileId} - ${transcription}`});
});