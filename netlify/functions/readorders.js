const admin = require('firebase-admin');
const { initializeApp,cert }  = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = JSON.parse(process.env.firebaseCredential);

exports.handler = async function(event, context) {
    const user = context.clientContext.user;


    if (user.email != "grandtechsolution101@gmail.com"){
        return {
            statusCode: 403,
            body: JSON.stringify({
            message: "You are not allowed to retrieve orders",
            }),
        };
    }
        
    let app;
    if(admin.apps.length === 0) {
        app = initializeApp({
            credential : cert(serviceAccount),
        });
    }

    const db =getFirestore(app);
    const orders = await db.collection("order").get();

    const results = orders.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data(),
        };
    });

    return {
        statusCode: 200,
        body: JSON.stringify(results),
    };

};