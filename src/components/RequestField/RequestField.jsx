import React from 'react'
import cl from './RequestField.module.scss'
import cn from 'classnames'

const RequestField = ({ setRequestField, request, jsonValid }) => {
    const getRequest = (e) => {
        setRequestField(e.target.value)
    }

    return (
        <div
            className={cn(cl.requestField, !jsonValid && cl.requestFieldError)}
        >
            <label className={cl.label}>Запрос:</label>
            <textarea
                name="Запрос"
                className={cl.textArea}
                onChange={getRequest}
                value={request}
            />
        </div>
    )
}

export default RequestField
