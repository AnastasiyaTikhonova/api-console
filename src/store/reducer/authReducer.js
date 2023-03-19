import { TYPES } from '../actionTypes'

const defaultState = {
    isAuth: false,
    sessionId: null,
    login: null,
    sublogin: null,
    isLoading: false,
    loader: true,
}

export const authReducer = (state = defaultState, { payload, type }) => {
    switch (type) {
        case TYPES.LOGIN:
            return {
                ...state,
                isAuth: true,
                sessionId: payload.sessionId,
                login: payload.loginValue,
                sublogin: payload.subloginValue,
            }
        case TYPES.LOGOUT:
            return {
                ...state,
                isAuth: false,
                sessionId: null,
                login: null,
                sublogin: null,
            }
        case TYPES.SET_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading,
            }
        case TYPES.LOADER:
            return {
                ...state,
                loader: payload.loader,
            }
        default:
            return state
    }
}
