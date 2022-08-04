import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import jobsReducer from './reducers/jobsReducer'

const reducer = combineReducers({
      jobsState: jobsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))


export default store