import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'
import { getAuthUserData } from './auth-reducer'

const INITIONLIZET_SUCCESS = 'INITIONLIZET_SUCCESS';

let initialState = {
    initionlizet: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIONLIZET_SUCCESS:
            return {
                ...state,
                initionlizet: true,
            }

        default:
            return state;

    }
}

export const initionlizetSuccsess = () => ({ type: INITIONLIZET_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
        dispatch(initionlizetSuccsess());
    })
}

export default appReducer;