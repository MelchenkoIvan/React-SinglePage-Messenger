import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";
import { getAuthUserData } from "./auth-reduser";

const SET_INITIALIZED = 'SET_INITIALIZED'





let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}



export const InitializedSuccess = () => ({ type: SET_INITIALIZED });
export const initializeApp = () => (dispatch) => {
    
    let promise = dispatch(getAuthUserData());

    promise.then(() => {
        dispatch(InitializedSuccess());
    })

}

export default appReducer;