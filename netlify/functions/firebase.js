const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAiaX8k6xhDxhpBewIP5lR10S51qIGxt98",
    authDomain: "kelloggram-ae5e6.firebaseapp.com",
    projectId: "kelloggram-ae5e6",
    storageBucket: "kelloggram-ae5e6.appspot.com",
    messagingSenderId: "897457529831",
    appId: "1:897457529831:web:b1bf1e69b8f5d2ffc7d342"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase