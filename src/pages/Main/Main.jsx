import React, { useEffect } from 'react'
import Auth from '../../containers/Auth'
import Console from '../../containers/Console'
import { useSelector, useDispatch } from 'react-redux'
import { getIsAuth } from '../../store/selectors'
import { checkAuth } from '../../store/actions/authAction'
import { getLoaderStatus } from '../../store/selectors'
import Loader from '../../components/Loader'

const Main = () => {
    const isAuth = useSelector(getIsAuth)
    const loader = useSelector(getLoaderStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuth())
    }, [])

    return loader ? <Loader /> : isAuth ? <Console /> : <Auth />
}

export default Main
