import firebase from "firebase";

const MODE = "PROD"; //[PROD, EMULATOR]
const EMULATOR_IP = "localhost";

var firebaseProdConfig = {
  apiKey: "AIzaSyCcFQpFHCMr8t9kPlFH1mpfKr4uPmANJ6Q",
  authDomain: "todomy-8c139.firebaseapp.com",
  projectId: "todomy-8c139",
  storageBucket: "todomy-8c139.appspot.com",
  messagingSenderId: "748112779819",
  appId: "1:748112779819:web:02a731084beaa42491286e",
  measurementId: "G-V9DJ3JK0L5"
};

if (MODE === "PROD") { //PROD
  console.log("firebase initialized in prod mode")
  firebase.initializeApp(firebaseProdConfig);
} else { //EMULATOR
  console.log("firebase initialized in emulator mode")
  firebase.initializeApp(firebaseProdConfig);
  firebase.auth().useEmulator(`http://${EMULATOR_IP}:9099/`);
  firebase.functions().useEmulator(`${EMULATOR_IP}`, 5001)
  firebase.database().useEmulator(`${EMULATOR_IP}`, 9000);
  firebase.firestore().useEmulator(`${EMULATOR_IP}`, 8080);
}

firebase.firestore().settings({ignoreUndefinedProperties: true});
