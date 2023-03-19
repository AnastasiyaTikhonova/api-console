import React from 'react'
import cl from './Wrapper.module.scss'

const Wrapper = ({ children }) => {
    return (
        <>
            <div className={cl.wrapper}>{children}</div>
            <div className={cl.dividingLine}></div>
        </>
    )
}

export default Wrapper
