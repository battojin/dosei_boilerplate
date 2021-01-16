import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composedEnhancers = composeFunc(applyMiddleware(...middleware))
const store = createStore(rootReducer(), initialState, composedEnhancers)

export default store
