import React from 'react'
import cl from './AuthError.module.scss'
import { ErrorIcon } from './ErrorIcon'

const AuthError = ({ idError, errorExplain }) => {
    return (
        <div className={cl.errorContainer}>
            <div className={cl.firstRow}>
                <ErrorIcon />
                <span className={cl.error}>Вход не вышел</span>
            </div>
            <div className={cl.errorDescription}>
                id: {idError}, explain: {errorExplain}
            </div>
        </div>
    )
}

export default AuthError
