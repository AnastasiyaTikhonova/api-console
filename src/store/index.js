import {
    applyMiddleware,
    legacy_createStore as createStore,
    combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducer/authReducer'
import { consoleReducer } from './reducer/consoleReducer'

export const store = createStore(
    combineReducers({
        authReducer,
        consoleReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
