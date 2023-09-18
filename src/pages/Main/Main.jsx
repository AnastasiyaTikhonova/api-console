import React, { useEffect } from 'react'
import Auth from '../../containers/Auth'
import Console from '../../containers/Console'
import { useSelector, useDispatch } from 'react-redux'
import { getIsAuth } from '../../store/selectors'
import { checkAuth } from '../../store/actions/authAction'
import { setHistoryItems } from '../../store/actions/consoleAction'
import STORAGE from '../../helpers/Storage'
import { LS_KEYS } from '../../constants'
import { getLoaderStatus } from '../../store/selectors'
import Loader from '../../components/Loader'

const Main = () => {
    const isAuth = useSelector(getIsAuth)
    const loader = useSelector(getLoaderStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        const historyItems = STORAGE.getProps(LS_KEYS.HISTORY_ITEMS)
        dispatch(checkAuth())
        if (historyItems) {
            dispatch(setHistoryItems(historyItems))
        }
    }, [])

    return loader ? <Loader /> : isAuth ? <Console /> : <Auth />
}

export default Main
