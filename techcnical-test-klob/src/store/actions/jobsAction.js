function addJobs(jobs) {
    return function (dispatch) {
       dispatch({
             type: "ADD_JOBS",
             payload: jobs
       })
    }
}
 
function fetchJobs(url) {
    return (dispatch) => {
       fetch(url)
           .then(res => {
               console.log("ini response" + res);
             if (res.ok){
                return res.json()
             } else {
                return Promise.reject('something wrong: fetch pokemons')
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
 
export { fetchJobs}