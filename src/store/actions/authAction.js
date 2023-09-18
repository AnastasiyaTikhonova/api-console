import API from '../../service/Api'
import STORAGE from '../../helpers/Storage'
import { TYPES } from '../actionTypes'
import { LS_KEYS } from '../../constants/index'

export const auth =
    (
        loginValue,
        subloginValue,
        passwordValue,
        setError,
        setIdError,
        setErrorExplain
    ) =>
    async (dispatch) => {
        let sessionId = null

        try {
            dispatch(setLoadingStatus(true))
            const res = await API.login(loginValue, passwordValue)
            sessionId = res.session
            STORAGE.setProps(LS_KEYS.SESSION_ID, sessionId)
            STORAGE.setProps(LS_KEYS.LOGIN_VALUE, loginValue)
            STORAGE.setProps(LS_KEYS.SUBLOGIN_VALUE, subloginValue)
            dispatch({
                type: TYPES.LOGIN,
                payload: {
                    sessionId,
                    loginValue,
                    subloginValue,
                },
            })
            dispatch(setLoadingStatus(false))
        } catch (e) {
            dispatch(setLoadingStatus(false))
            console.log(e)
            if (e.explain) {
                setError(true)
                setIdError(e.id)
                setErrorExplain(e.explain)
            } else {
                setError(true)
                setIdError('No id')
                setErrorExplain('Something goes wrong')
            }
        }
    }

export const checkAuth = () => async (dispatch) => {
    const sessionId = STORAGE.getProps(LS_KEYS.SESSION_ID)
    try {
        if (sessionId) {
            const res = await API.checkSession(sessionId)
            if (res.ping) {
                const loginValue = STORAGE.getProps(LS_KEYS.LOGIN_VALUE)
                const subloginValue = STORAGE.getProps(LS_KEYS.SUBLOGIN_VALUE)
                dispatch({
                    type: TYPES.LOGIN,
                    payload: {
                        sessionId,
                        loginValue,
                        subloginValue,
                    },
                })
            }
        }
    } catch (e) {
        console.log(e)
        STORAGE.removeProps(LS_KEYS.SESSION_ID)
        STORAGE.removeProps(LS_KEYS.LOGIN_VALUE)
        STORAGE.removeProps(LS_KEYS.SUBLOGIN_VALUE)
    } finally {
        dispatch(setLoader(false))
    }
}

export const setLoadingStatus = (status) => {
    return {
        type: TYPES.SET_LOADING,
        payload: {
            isLoading: status,
        },
    }
}

export const setLoader = (status) => {
    return {
        type: TYPES.LOADER,
        payload: {
            loader: status,
        },
    }
}

export const logOut = () => async (dispatch, getState) => {
    const {
        authReducer: { sessionId },
    } = getState()

    try {
        await API.logOut(sessionId)

        dispatch({
            type: TYPES.LOGOUT,
        })

        STORAGE.removeProps(LS_KEYS.SESSION_ID)
        STORAGE.removeProps(LS_KEYS.LOGIN_VALUE)
        STORAGE.removeProps(LS_KEYS.SUBLOGIN_VALUE)
    } catch (e) {
        console.log('error: ', e)
    }
}
