let defaultState = {
    bounties: [
        {
            name: "testname",
            location: "testlocal",
            reward: "testreward",
            wanted: "testwanted"
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