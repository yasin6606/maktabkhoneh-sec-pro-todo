const initialState = {

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDNEWWORK":
            return {
                data: action.payload,
            };
        default:
            return state;
    };
};

module.exports = Reducer;