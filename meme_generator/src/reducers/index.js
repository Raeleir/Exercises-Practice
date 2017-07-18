let defaultState = {
    url: "http://memegenerator.cc/templates/philosoraptor.jpg",
    top: "Stock",
    bottom: "Text"
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "MAKE_MEME"){
        return {
            ...state,
            url: action.meme.url,
            top: action.meme.top,
            bottom: action.meme.bottom
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;