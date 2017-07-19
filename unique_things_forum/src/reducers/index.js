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
        let copy = [...state.items];
        copy.splice(action.index, 1);
        return {
            ...state,
            items: copy
        }
    } else if(action.type === "EDIT") {
        let copy = [...state.items];
        copy[action.index] = action.item;
        return {
            ...state,
            items: copy
        }
    } else {
        return {...state};
    }
};

export default mainReducer;