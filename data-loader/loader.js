const products = require('./data.json');
const dotenv = require('dotenv');
const firebase = require("firebase");

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let promises = []

products.forEach(product => {
    promises.push(db.collection('products').add({
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        type: product.type,
    }))
})

// console.log(promesa)

Promise.all(promises).then(result => {
    console.log("OK: ", result)
}).catch(error => {
    console.log("Error: ", error)
})