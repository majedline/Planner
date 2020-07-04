import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
   
    //useFirestoreForProfile: Want the firebase reducer to use the firestore database to sync on the provile object
    // userProfile: 'users': says which table to sync to. Note tha the user was created in the authAction in the SignUp. firestore.collection('user')
    // (i.e. userProfile: 'users' says what the firebase root where user profiles are stored
    // attachAuthIsReady: true: attaches auth is ready promise to store
    reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),// redux binding for firebase

    reduxFirestore(fbConfig) // redux bindings for firestore


  )
);

// added the attachAuthIsReady: true to the reactReduxFirebase link and place the firebaseAuthIsReadt promise
//function to prevent the dom from loading the screen and showing the login & signup while waiting for the authentcaion/server
// i.e. wait rendering the dom until firebase is ready.
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>
    ,
    document.getElementById('root')
  );
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
