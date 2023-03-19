import { TYPES } from '../actionTypes'
import { nanoid } from 'nanoid'

const mockItems = [
    {
        id: nanoid(),
        status: false,
        name: 'itemqweqw123',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: true,
        name: 'item',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemfdhghjfghj',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemqweqw',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'item',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: true,
        name: 'itemfdhghjfghj',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemqweqw',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'item',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemfdhghjfghj',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemqweqw',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'item',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemfdhghjfghj',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemqweqw',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'item',
        requestString: 'requestString',
    },
    {
        id: nanoid(),
        status: false,
        name: 'itemfdhghjfghj',
        requestString: 'requestString',
    },
]

const initialState = {
    historyItems: mockItems,
}

export const consoleReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case TYPES.SET_HISTORY_ITEM:
            return {
                ...state,
                historyItems: [...state.historyItems, { ...payload }],
            }
        default:
            return state
    }
}
