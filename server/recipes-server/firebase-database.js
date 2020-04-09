'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/recipes-6001c-firebase-adminsdk-rpkeu-631abfd01c.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipes-6001c.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://recipes-6001c.firebaseio.com");
module.exports = firebase;