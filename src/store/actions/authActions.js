export const signIn = (credentials) => {

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });

        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // creating a new user
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password

        ).then((creatingNewUserServerResponse) => {

            const usersCollection = firestore.collection('user')
            // create a new doc with that id
            const document = usersCollection.doc(creatingNewUserServerResponse.user.uid);
            // store the data insite the document
            document.set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', err: error});
        })
    };
}