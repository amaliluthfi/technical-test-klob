const intialState = {
    loading: true,
    err: null,
    jobs: [],
    job: {}
 }
 
export default function addJobs(state = intialState, action) {
     console.log(action.payload)
     switch (action.type) {
           
             case "ADD_JOB":
                   return { ...state, jobs: action.payload }
             case "JOB_BY_ID":
                   return {...state, job: action.payload}
             case "LOADING_STATUS":
                   return {...state, loading:  action.payload}
             case "ERROR_STATUS":
                   return {...state, err: action.payload}
             default:
                   return state
       }
    
 }