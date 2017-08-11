let defaultState = {
    bounties: [
        {
            name: "",
            location: "",
            reward: "",
            wanted: ""
        }
    ]
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            bounties: action.data
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;