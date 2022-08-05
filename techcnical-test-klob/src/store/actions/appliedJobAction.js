function appliedJobs(jobs) {
    return function (dispatch) {
       dispatch({
             type: "APPLIED_JOBS",
             payload: jobs
       })
    }
}

function appliedJob(job) {
    return function (dispatch) {
       dispatch({
             type: "APPLIED_JOB",
             payload: job
       })
    }
}

function postAppliedJob(url, data) {
    return (dispatch) => {
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
           .then(res => {
             if (res.ok){
                return res.json()
             } else {
                return Promise.reject('something wrong: applied job')
             }
          })
            .then(data => {

              
          })
          .catch(err => {
                return console.log(err)
          })
    }
}

function appliedStatus(url, data) {
    return (dispatch) => {
        fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...data, applied: true})
        })
           .then(res => {
             if (res.ok){
                return res.json()
             } else {
                return Promise.reject('something wrong: applied job')
             }
          })
            .then(data => {

              console.log(data)
              
          })
          .catch(err => {
                return console.log(err)
          })
    }
}



 
export { postAppliedJob, appliedStatus}