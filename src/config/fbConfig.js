
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBz2uQcFqTAfUoCFNdjg47kYQfnvc_pur4",
    authDomain: "net-planner-7be21.firebaseapp.com",
    databaseURL: "https://net-planner-7be21.firebaseio.com",
    projectId: "net-planner-7be21",
    storageBucket: "net-planner-7be21.appspot.com",
    messagingSenderId: "8503679274",
    appId: "1:8503679274:web:7cbd10a6456e1fbe15a653",
    measurementId: "G-FF4ZFQ8WMY"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;