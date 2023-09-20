import React from 'react'
import cl from './Wrapper.module.scss'

const Wrapper = ({ children, ...props }) => {
    return (
        <div {...props}>
            <div className={cl.wrapper} id="wrapper">
                {children}
            </div>
            <div className={cl.dividingLine}></div>
        </div>
    )
}

export default Wrapper
