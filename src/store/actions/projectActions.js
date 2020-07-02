

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to the database
        const firestore = getFirestore();
        
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jim1',
            authorLastName: 'Jam1',
            authorId: 11,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })


    };
};



