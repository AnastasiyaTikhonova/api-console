import React from 'react'
import cl from './ResultField.module.scss'

const ResultField = () => {
    return (
        <div className={cl.requestField}>
            <label className={cl.label}>Ответ:</label>
            <textarea name="Запрос" className={cl.textArea}></textarea>
        </div>
    )
}

export default ResultField
