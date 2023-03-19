import React from 'react'
import cl from './FormateButton.module.scss'

import { Formate } from '../../icons/Formate/Formate'

const FormateButton = () => {
    return (
        <button className={cl.formateButton}>
            <Formate />
            <span className={cl.title}>Форматировать</span>
        </button>
    )
}

export default FormateButton
