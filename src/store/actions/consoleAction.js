import { TYPES } from '../actionTypes'
import STORAGE from '../../helpers/Storage'
import { LS_KEYS } from '../../constants'

export const deleteAllHistory = () => (dispatch) => {
    dispatch(setHistoryItems([]))
}

export const deleteHistoryItem = (id) => (dispatch, getState) => {
    const currHistoryItems = getState().consoleReducer.historyItems
    const filteredHistoryItems = currHistoryItems.filter(
        (historyItem) => historyItem.id !== id
    )
    dispatch(setHistoryItems(filteredHistoryItems))
}

export const setHistoryItem =
    (id, status, name, requestString) => (dispatch, getState) => {
        const currHistoryItems = getState().consoleReducer.historyItems
        const normalizeHistoryItem = JSON.stringify(JSON.parse(requestString))
        const filteredHistoryItems = currHistoryItems.filter(
            (item) =>
                JSON.stringify(JSON.parse(item.requestString)) !==
                normalizeHistoryItem
        )

        dispatch(
            setHistoryItems([
                {
                    id,
                    status,
                    name,
                    requestString,
                },
                ...filteredHistoryItems,
            ])
        )
    }

export const setHistoryItems = (items) => {
    STORAGE.setProps(LS_KEYS.HISTORY_ITEMS, items)

    return {
        type: TYPES.SET_HISTORY_ITEMS,
        payload: {
            items,
        },
    }
}
