import {
    CLOSE_MODAL,
    ACTIVE_MODAL
} from "src/actions/modalInfo";

export const initialState = {
    open: false,
    header:"",
    message:""
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case CLOSE_MODAL:

            return{
                ...state,
                open: false
            };

        case ACTIVE_MODAL:
            console.log("open",action.payload)
            return{
                ...state,
                open: true,
                header: action.payload.header,
                message: action.payload.message
            };

        default:
            return state;
    }

};

export default reducer;