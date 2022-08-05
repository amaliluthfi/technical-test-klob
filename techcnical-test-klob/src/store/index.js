import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import jobsReducer from './reducers/jobsReducer'
import appliedJobReducer from './reducers/appliedJobsReducer'

const reducer = combineReducers({
      jobsState: jobsReducer,
      appliedJobState: appliedJobReducer
})

const store = createStore(reducer, applyMiddleware(thunk))


export default store