import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var config = {
    apiKey: "xxxxxxx",
    authDomain: "net-planner-7be21.firebaseapp.com",
    databaseURL: "https://net-planner-7be21.firebaseio.com",
    projectId: "net-planner-7be21",
    storageBucket: "net-planner-7be21.appspot.com",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxxx",
    measurementId: "xxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;