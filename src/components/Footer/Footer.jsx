import React from 'react'
import cl from './Footer.module.scss'
import MyButton from '../../UI/button'
import FormateButton from '../../UI/FormateButton/FormateButton'

const Footer = ({ onSend, correctFormat }) => {
    return (
        <div className={cl.footer}>
            <MyButton onClick={onSend}>Отправить</MyButton>
            <a
                className={cl.linkOnGithub}
                href="https://github.com/AnastasiyaTikhonova"
            >
                @AnastasiyaTikhonova
            </a>
            <FormateButton onClick={correctFormat} />
        </div>
    )
}

export default Footer
