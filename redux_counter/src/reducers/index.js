let defaultState = {
    counter: 0
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "ADD") return { ...state, counter: state.counter + 1 };
    if(action.type === "SUBTRACT") return { ...state, counter: state.counter - 1 };
    return { ...state };
}

export default mainReducer;