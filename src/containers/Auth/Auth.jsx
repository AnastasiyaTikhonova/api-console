import React, { useState } from 'react'
import { Logo } from '../../icons/Logo/Logo'
import AuthError from './AuthError/AuthError'
import MyInput from '../../UI/input/MyInput'
import MyButton from '../../UI/button/MyButton'
import cl from './Auth.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../store/actions/authAction'
import Loader from '../../UI/Loader/Loader'
import { getLoadingStatus } from '../../store/selectors'
import cn from 'classnames'

const Auth = () => {
    const [loginValue, setLoginValue] = useState('')
    const [subloginValue, setSubloginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [error, setError] = useState(false)
    const [idError, setIdError] = useState('')
    const [validLogin, setValidLogin] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [errorExplain, setErrorExplain] = useState('')
    const isLoading = useSelector(getLoadingStatus)
    const dispatch = useDispatch()
    
    const setProps = (value, name) => {
        setError(false)
        if (name === 'password') {
            setPasswordValue(value)
            setValidPassword(true)
        }

        if (name === 'sublogin') {
            setSubloginValue(value)
        }

        if (name === 'login') {
            setLoginValue(value)
            setValidLogin(true)
        }
    }

    const validateLogin = (login) => {
        const regEmail =
            /^([A-Za-zА-Яа-я0-9_\-.])+@([A-Za-zА-Яа-я0-9_\-.])+\.([A-Za-zА-Яа-я]{2,4})$/
        const regLogin = /^[a-zA-Z0-9_]+$/

        return regLogin.test(login) || regEmail.test(login)
    }

    const validatePassword = (password) => {
        const regPass = /^[a-zA-Z0-9]+$/

        return regPass.test(password)
    }

    const authorization = (e) => {
        e.preventDefault()
        if (isLoading) {
            return
        }

        if (validateLogin(loginValue) && validatePassword(passwordValue)) {
            dispatch(
                auth(
                    loginValue,
                    subloginValue,
                    passwordValue,
                    setError,
                    setIdError,
                    setErrorExplain
                )
            )
        } else {
            if (!validateLogin(loginValue)) {
                setValidLogin(false)
            }
            if (!validatePassword(passwordValue)) {
                setValidPassword(false)
            }
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.logo}>
                <Logo />
            </div>
            <form className={cl.loginForm}>
                <span className={cl.formTitle}>API-консолька</span>
                {error ? (
                    <AuthError idError={idError} errorExplain={errorExplain} />
                ) : null}
                <div
                    className={cn(
                        cl.inputLabel,
                        !validLogin && cl.inputLabelError
                    )}
                >
                    Логин
                </div>
                <MyInput
                    value={loginValue}
                    isError={!validLogin}
                    onChange={(e) => setProps(e.target.value, 'login')}
                />

                <div className={cl.inputLabel}>
                    Сублогин<div className={cl.optionalLabel}>Опционально</div>
                </div>
                <MyInput
                    value={subloginValue}
                    onChange={(e) => setProps(e.target.value, 'sublogin')}
                />

                <div
                    className={cn(
                        cl.inputLabel,
                        !validPassword && cl.inputLabelError
                    )}
                >
                    Пароль
                </div>
                <MyInput
                    value={passwordValue}
                    isError={!validPassword}
                    onChange={(e) => setProps(e.target.value, 'password')}
                    type="password"
                />

                <MyButton onClick={authorization}>
                    {isLoading ? <Loader /> : 'Войти'}
                </MyButton>
            </form>
            <div className={cl.linkContainer}>
                <a
                    className={cl.linkOnGithub}
                    href="https://github.com/AnastasiyaTikhonova"
                >
                    @AnastasiyaTikhonova
                </a>
            </div>
        </div>
    )
}

export default Auth
