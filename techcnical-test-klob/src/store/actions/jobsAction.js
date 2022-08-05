function addJobs(jobs) {
    return function (dispatch) {
       dispatch({
             type: "ADD_JOBS",
             payload: jobs
       })
    }
}

function addJob(job) {
    return function (dispatch) {
       dispatch({
             type: "JOB_BY_CODE",
             payload: job
       })
    }
}
 
function fetchJobs(url) {
    return (dispatch) => {
       fetch(url)
           .then(res => {
             if (res.ok){
                return res.json()
             } else {
                return Promise.reject('something wrong: fetch jobs')
             }
          })
          .then(data => {
              dispatch(addJobs(data))

 
          })
          .catch(err => {
                return console.log(err)
          })
    }
}

function fetchJobByCode(url) {
    return (dispatch) => {
       fetch(url)
           .then(res => {
             if (res.ok){
                return res.json()
             } else {
                return Promise.reject('something wrong: fetch job')
             }
          })
          .then(data => {
              dispatch(addJob(data))
              console.log(data)
          })
          .catch(err => {
                return console.log(err)
          })
    }
}
 
export { fetchJobs, fetchJobByCode}