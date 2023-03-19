import React from 'react'
import cl from './RequestField.module.scss'

const RequestField = () => {
    return (
        <div className={cl.requestField}>
            <label className={cl.label}>Запрос:</label>
            <textarea name="Запрос" className={cl.textArea} />
        </div>
    )
}

export default RequestField
