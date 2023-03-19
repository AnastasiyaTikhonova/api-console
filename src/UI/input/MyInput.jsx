import React from 'react'
import cl from './MyInput.module.scss'
import cn from 'classnames'

const MyInput = ({ isError = false, value, onChange, type = 'text' }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            className={cn(cl.input, isError && cl.inputError)}
        />
    )
}
export default MyInput
