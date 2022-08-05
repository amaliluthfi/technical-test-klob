const intialState = {
    loading: false,
    err: null,
    appliedJobs: [],
    appliedJob: {}
 }
 
export default function appliedJobs(state = intialState, action) {
     switch (action.type) {
             case "APPLIED_JOBS":
                   return { ...state, jobs: action.payload }
            case  "APPLIED_JOB":
                   return {...state, job: action.payload[0]}
             case "LOADING_STATUS":
                   return {...state, loading:  action.payload}
             case "ERROR_STATUS":
                   return {...state, err: action.payload}
             default:
                   return state
       }
    
 }