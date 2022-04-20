const admin = require('firebase-admin');
const { initializeApp,cert}  = require("firebase-admin/app");
const { getFirestore} = require("firebase-admin/firestore");
const serviceAccount = JSON.parse(process.env.firebaseCredential);

exports.handler = async function(event, context) {
    let app;
    if(admin.apps.length === 0) {
        app = initializeApp({
            credential : cert(serviceAccount),
        });


    }
}