import React, { useState } from 'react'
import Header from '../../components/Header'
import HistoryTrack from '../HistoryTrack'
import Wrapper from '../Wrapper'
import RequestField from '../../components/RequestField'
import ResultField from '../../components/ResultField'
import { DragElement } from '../../icons/DragElement/DragElement'
import cl from './Console.module.scss'
import Footer from '../../components/Footer'
import API from '../../service/Api'
import { getHistoryItems, getSessionId } from '../../store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setHistoryItem } from '../../store/actions/consoleAction'
import { nanoid } from 'nanoid'

const Console = () => {
    const [request, setRequest] = useState('')
    const [jsonValid, setJsonValid] = useState(true)
    const [answer, setAnswer] = useState('')
    const [validAnswer, setValidAnswer] = useState(true)
    const sessionId = useSelector(getSessionId)
    const historyItems = useSelector(getHistoryItems)
    const dispatch = useDispatch()

    const validateRequest = () => {
        try {
            JSON.parse(request)
            setJsonValid(true)
            return true
        } catch {
            setJsonValid(false)
            return false
        }
    }

    const onClickSendHandler = async () => {
        if (validateRequest()) {
            let answerFromServer
            try {
                answerFromServer = await API.makeRequest(request, sessionId)
                setAnswer(JSON.stringify(answerFromServer, null, 2))
                setValidAnswer(true)
                dispatch(
                    setHistoryItem(
                        nanoid(),
                        true,
                        JSON.parse(request).action,
                        request
                    )
                )
            } catch (e) {
                setAnswer(JSON.stringify(e, null, 2))
                setValidAnswer(false)
                dispatch(
                    setHistoryItem(
                        nanoid(),
                        false,
                        JSON.parse(request).action,
                        request
                    )
                )
            }
        }
    }

    const repeateItem = async (itemId) => {
        const item = historyItems.find((item) => item.id === itemId)
        const itemRequest = item.requestString
        let answerFromServer
        setRequest(itemRequest)

        try {
            answerFromServer = await API.makeRequest(itemRequest, sessionId)
            setAnswer(JSON.stringify(answerFromServer, null, 2))
            setValidAnswer(true)
            dispatch(
                setHistoryItem(
                    nanoid(),
                    true,
                    JSON.parse(itemRequest).action,
                    itemRequest
                )
            )
        } catch (e) {
            setAnswer(JSON.stringify(e, null, 2))
            setValidAnswer(false)
            dispatch(
                setHistoryItem(
                    nanoid(),
                    false,
                    JSON.parse(itemRequest).action,
                    itemRequest
                )
            )
        }
    }

    const correctFormat = () => {
        if (request) {
            const correctRequest = JSON.stringify(JSON.parse(request), null, 2)
            setRequest(correctRequest)
        }
    }

    return (
        <div className={cl.consoleWrapper}>
            <Header />
            <HistoryTrack repeateItem={repeateItem} />
            <Wrapper>
                <RequestField
                    setRequestField={setRequest}
                    request={request}
                    jsonValid={jsonValid}
                />
                <div className={cl.dragElement}>
                    <DragElement />
                </div>
                <ResultField answer={answer} validAnswer={validAnswer} />
            </Wrapper>
            <Footer onSend={onClickSendHandler} correctFormat={correctFormat} />
        </div>
    )
}

export default Console
