
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
            break;
        default:
            console.log("default value", action);
    }
    return state;
}

export default projectReducer;