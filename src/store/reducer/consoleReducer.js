import { TYPES } from '../actionTypes'

const initialState = {
    historyItems: [],
}

export const consoleReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case TYPES.SET_HISTORY_ITEMS:
            return {
                ...state,
                historyItems: payload.items,
            }
        default:
            return state
    }
}
