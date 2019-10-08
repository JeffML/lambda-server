const Firestore = require('@google-cloud/firestore');

// // Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestoreeee');

  // // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore2',
    body: 'Hello World2',
  });
  // console.log('Entered new data into the document');
}

exports.handler = async (event, context, callback) => {
  await quickstart().catch(e => { throw e })
  return { statusCode: 200, body: "flub" }
}
