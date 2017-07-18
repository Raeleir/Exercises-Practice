let defaultState = {
    items: []
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "GEN_ITEM") {
        return {
            ...state,
            items: [...state.items, action.item],
        }
    } else if(action.type === "DEL_ITEM") {
        let oldState = [...state.items];
        oldState.splice(action.index, 1);
        return {
            ...state,
            items: oldState
        }
    } else {
        return {...state};
    }
};

export default mainReducer;