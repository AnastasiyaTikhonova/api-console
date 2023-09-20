import React, { useEffect, useState } from 'react'
import cl from './RequestField.module.scss'
import cn from 'classnames'

const RequestField = ({
    setRequestField,
    request,
    jsonValid,
    delta,
    codePanel,
    resizingInProcess,
}) => {
    const [panelWidth, setPanelWidth] = useState(0)

    useEffect(() => {
        if (delta) {
            if (codePanel === 'left') {
                document.getElementById('left').width =
                    panelWidth - delta + 'px'
            } else {
                document.getElementById('left').width =
                    panelWidth + delta + 'px'
            }
        }
    }, [delta])

    useEffect(() => {
        if (!resizingInProcess) {
            setPanelWidth(document.getElementById('left').offsetWidth)
        }
    }, [resizingInProcess])

    const getRequest = (e) => {
        setRequestField(e.target.value)
    }

    return (
        <div
            id="left"
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
