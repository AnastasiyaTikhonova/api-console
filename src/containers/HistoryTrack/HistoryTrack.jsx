import React, { useRef } from 'react'
import HistoryElement from '../../components/HistoryElement'
import cl from './HistoryTrack.module.scss'
import { ExitLogo } from '../../icons/ExitLogo/ExitLogo'
import { useSelector } from 'react-redux'
import { getHistoryItems } from '../../store/selectors'

const HistoryTrack = () => {
    const historyItems = useSelector(getHistoryItems)
    const ref = useRef()

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
                            />
                        )
                    })}
                </div>
                <div className={cl.exitLogo}>
                    <ExitLogo />
                </div>
            </div>
            <div className={cl.dividingLine}></div>
        </>
    )
}

export default HistoryTrack
