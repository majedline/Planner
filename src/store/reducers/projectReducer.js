
const initState = {
    projects: [
        { id: '1', title: "My tirst Project", content: "stuff etc content blah" },
        { id: '2', title: "My second Project", content: "stuff etc content blah" },
        { id: '3', title: "My third Project", content: "stuff etc content blah" },
    ]

};

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Created Project", action.project);
            return state;
            
        case 'CREATE_PROJECT_ERROR':
            console.log("Create Project Error", action.err);
            return state;

        default:
            return state;

    }
}

export default projectReducer;