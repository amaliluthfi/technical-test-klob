const intialState = {
    loading: false,
    err: null,
    jobs: [],
    job: {}
 }
 
export default function addJobs(state = intialState, action) {
     switch (action.type) {
             case "ADD_JOBS":
                   return { ...state, jobs: action.payload }
           case "JOB_BY_CODE":
            //      console.log(action.payload + " dari reducer")
                   return {...state, job: action.payload[0]}
             case "LOADING_STATUS":
                   return {...state, loading:  action.payload}
             case "ERROR_STATUS":
                   return {...state, err: action.payload}
             default:
                   return state
       }
    
 }