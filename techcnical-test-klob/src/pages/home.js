import React from 'react'
import JobCard from '../components/jobCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobs } from '../store/actions/jobsAction'

export default function Home() {

    const { jobsState } = useSelector((state) => state)
    const { jobs, loading, err } = jobsState
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(fetchJobs("http://localhost:3000/fakeJob"))
        
    }, [dispatch, jobs])
    
    return (
        
        <div className='menu'>    
            {
                jobs.map((job, index) => {
                    return <JobCard key={index} job={ job}  />
                })
            }

        </div>
    );
}