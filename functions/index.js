const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const files = admin.firestore().collection('files');

const runOCR = fileItem => {
  
  functions.logger.log('Running OCR', fileItem);
  //TODO
}

exports.triggerOCR = functions.https.onRequest(async (req, res) => {

  const fileId = req.query.text;

  if (!fileId) {
    res.json({result: `You didn't specify a fileId`});
  }

  const file = await files.doc(`${fileId}`).get();

  if (!file.exists) {
    res.json({result: `File not found`});
  }

  runOCR(file.data())

  res.json({result: `Triggered with ID: ${fileId}`});
});


exports.onFileCreated = functions.firestore.document('/files/{documentId}')
    .onCreate((snap, context) => {

      const fileItem = snap.data();
      functions.logger.log('onFileCreated', context.params.documentId, fileItem);
      
      runOCR(fileItem);

      return null;
    });
