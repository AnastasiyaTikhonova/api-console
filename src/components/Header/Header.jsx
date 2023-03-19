import React from 'react'
import cl from './Header.module.scss'
import { Logo } from '../../icons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin, getSubLogin } from '../../store/selectors'
import { Logout } from '../../icons/Logout/Logout'
import { ChangeScreenSize } from '../../icons/ChangeScreenSize/ChangeScreenSize'
import { logOut } from '../../store/actions/authAction'

const Header = () => {
    const login = useSelector(getLogin)
    const sublogin = useSelector(getSubLogin)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logOut())
    }

    return (
        <>
            <div className={cl.container}>
                <div className={cl.titleContainer}>
                    <div className={cl.logo}>
                        <Logo />
                    </div>
                    <h1>API-консолька</h1>
                </div>
                <div className={cl.authContainer}>
                    <div className={cl.authInfo}>
                        {login} : {sublogin}
                    </div>
                    <div className={cl.logout} onClick={logoutHandler}>
                        <span>Выйти</span>
                        <Logout />
                    </div>
                </div>
                <div className={cl.imgChangeScreenSize}>
                    <ChangeScreenSize />
                </div>
            </div>
            <div className={cl.dividingLine}></div>
        </>
    )
}

export default Header
