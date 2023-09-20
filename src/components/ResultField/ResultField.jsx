import React, { useEffect, useState } from 'react'
import cl from './ResultField.module.scss'
import cn from 'classnames'

const ResultField = ({
    answer,
    validAnswer,
    delta,
    resizingInProcess,
    codePanel,
}) => {
    const [panelWidth, setPanelWidth] = useState(0)

    useEffect(() => {
        if (delta) {
            if (codePanel === 'right') {
                document.getElementById('right').width =
                    panelWidth - delta + 'px'
            } else {
                document.getElementById('right').width =
                    panelWidth + delta + 'px'
            }
        }
    }, [delta])

    useEffect(() => {
        if (!resizingInProcess) {
            setPanelWidth(document.getElementById('right').offsetWidth)
        }
    }, [resizingInProcess])

    return (
        <div
            id="right"
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
