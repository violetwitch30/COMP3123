const initialState = {
    token: null
};

function reducer(state = initialState, action) {
    if (action.type === "LOGIN") {
        return { ...state, token: action.payload };
    }
    if (action.type === "LOGOUT") {
        return { ...state, token: null };
    }
    return state;
}

export default reducer;