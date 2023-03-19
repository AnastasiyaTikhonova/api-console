import React from 'react'
import cl from './Footer.module.scss'
import MyButton from '../../UI/button'
import FormateButton from '../../UI/FormateButton/FormateButton'

const Footer = () => {
    return (
        <div className={cl.footer}>
            <MyButton>Отправить</MyButton>
            <a
                className={cl.linkOnGithub}
                href="https://github.com/AnastasiyaTikhonova"
            >
                @AnastasiyaTikhonova
            </a>
            <FormateButton />
        </div>
    )
}

export default Footer
