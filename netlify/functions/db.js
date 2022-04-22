const admin = require('firebase-admin');
const { initializeApp,cert }  = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = JSON.parse(process.env.firebaseCredential);

exports.handler = async function(event, context) {
    let app;
    if(admin.apps.length === 0) {
        app = initializeApp({
            credential : cert(serviceAccount),
        });
    }

    const db =getFirestore(app);

    try{
        const body = JSON.parse(event.body);
        const customerEmail = body.email;
        const orders = body.orders;

        const response = await db.collection('order').add({
            customerEmail,
            orders
        })

        return {
            statussCode: 200,
            body: JSON.stringify({message: 'Document added succefully -'+ response.id,
            }),
        };
    
    }    catch (error){
        console.log("Error adding document",error);
    }

    
};