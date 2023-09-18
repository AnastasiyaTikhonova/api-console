import React, { useRef } from 'react'
import HistoryElement from '../../components/HistoryElement'
import cl from './HistoryTrack.module.scss'
import { ExitLogo } from '../../icons/ExitLogo/ExitLogo'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryItems } from '../../store/selectors'
import { deleteAllHistory } from '../../store/actions/consoleAction'

const HistoryTrack = ({ repeateItem }) => {
    const historyItems = useSelector(getHistoryItems)
    const ref = useRef()
    const dispatch = useDispatch()

    const horizontalScroll = (e) => {
        const _this = ref.current
        const nativeEvent = e.nativeEvent
        let modifier

        if (nativeEvent.deltaMode === nativeEvent.DOM_DELTA_PIXEL) {
            modifier = 1
        } else if (nativeEvent.deltaMode === nativeEvent.DOM_DELTA_LINE) {
            modifier = parseInt(getComputedStyle(_this).lineHeight)
        } else if (nativeEvent.deltaMode === nativeEvent.DOM_DELTA_PAGE) {
            modifier = _this.clientHeight
        }

        if (nativeEvent.deltaY !== 0) {
            _this.scrollLeft += modifier * nativeEvent.deltaY
        }
    }

    const deleteHistory = () => {
        dispatch(deleteAllHistory())
    }

    return (
        <>
            <div className={cl.history}>
                <div
                    className={cl.historyTrack}
                    ref={ref}
                    onWheel={horizontalScroll}
                >
                    {historyItems.map((item) => {
                        return (
                            <HistoryElement
                                key={item.id}
                                status={item.status}
                                name={item.name}
                                id={item.id}
                                request={item.requestString}
                                repeate={repeateItem}
                            />
                        )
                    })}
                </div>
                <div className={cl.exitLogo} onClick={() => deleteHistory()}>
                    <ExitLogo />
                </div>
            </div>
            <div className={cl.dividingLine}></div>
        </>
    )
}

export default HistoryTrack
