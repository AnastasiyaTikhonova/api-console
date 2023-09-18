import React from 'react'
import cl from './ResultField.module.scss'
import cn from 'classnames'

const ResultField = ({ answer, validAnswer }) => {
    return (
        <div
            className={cn(cl.resultField, !validAnswer && cl.resultFieldError)}
        >
            <label className={cl.label}>Ответ:</label>
            <textarea
                name="Запрос"
                className={cl.textArea}
                value={answer}
                readOnly
            />
        </div>
    )
}

export default ResultField
