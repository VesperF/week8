const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDQlLZYnrPXTclZxErVkN1_GNltDDjwU3E",
    authDomain: "kiei-451-vf.firebaseapp.com",
    projectId: "kiei-451-vf",
    storageBucket: "kiei-451-vf.appspot.com",
    messagingSenderId: "767101312475",
    appId: "1:767101312475:web:7a3eafe5eba40204f35bfe"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase