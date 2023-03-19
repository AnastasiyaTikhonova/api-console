import React from 'react'
import cl from './MyButton.module.scss'

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    )
}

export default MyButton
