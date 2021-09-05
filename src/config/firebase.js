import firebase from 'firebase';

const MODE = "EMULATOR"; //[PROD, EMULATOR]
const EMULATOR_IP = "localhost";

var firebaseProdConfig = {
  apiKey: "AIzaSyACPJzjYGMgcUUOjzrVDadib7818jIgPU8",
  authDomain: "jabi-e3a1e.firebaseapp.com",
  databaseURL: "https://jabi-e3a1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jabi-e3a1e",
  storageBucket: "jabi-e3a1e.appspot.com",
  messagingSenderId: "456790792169",
  appId: "1:456790792169:web:b34c3f0b0a8e23233f9d78",
  measurementId: "G-2ZSZZJGDG2"
};

if (MODE === "PROD") { //PROD
  firebase.initializeApp(firebaseProdConfig);
} else { //EMULATOR
  firebase.initializeApp(firebaseProdConfig);
  firebase.auth().useEmulator(`http://${EMULATOR_IP}:9099/`);
  firebase.functions().useEmulator(`${EMULATOR_IP}`, 5001)
  firebase.database().useEmulator(`${EMULATOR_IP}`, 9000);
  firebase.firestore().useEmulator(`${EMULATOR_IP}`, 8080);
}

firebase.firestore().settings({ignoreUndefinedProperties: true});
