import React from 'react'
import Header from '../../components/Header'
import HistoryTrack from '../HistoryTrack'
import Wrapper from '../Wrapper'
import RequestField from '../../components/RequestField'
import ResultField from '../../components/ResultField'
import { DragElement } from '../../icons/DragElement/DragElement'
import cl from './Console.module.scss'
import Footer from '../../components/Footer'

const Console = () => {
    return (
        <div className={cl.consoleWrapper}>
            <Header />
            <HistoryTrack />
            <Wrapper>
                <RequestField />
                <div className={cl.dragElement}>
                    <DragElement />
                </div>
                <ResultField />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Console
