import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobByCode} from '../store/actions/jobsAction'
import { currencyFormat, dateFormat } from '../helpers/helpers'
import { appliedStatus, postAppliedJob } from '../store/actions/appliedJobAction'

export default function DetailPage() {
    let { jobVacancyCode } = useParams();
    const { jobsState } = useSelector((state) => state)
    const { job } = jobsState
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchJobByCode(`http://localhost:3000/fakeJob?jobVacancyCode=${jobVacancyCode}`))
    }, [dispatch, jobVacancyCode, job.applied])

    function applyJob() {
        dispatch(appliedStatus("http://localhost:3000/fakeJob/" + job.id, job))
        dispatch(postAppliedJob("http://localhost:3001/appliedJobs", { ...job, applied: true }))
        
    }


    return (
        <div className="descBox">
            <img src={job.corporateLogo} width="300px" />
            <h1 style={{ marginBottom: "50px" }} className="title">{job.corporateName}</h1>
            <div style={{textAlign: "start", paddingLeft: "30px", paddingRight: "30px"}}>
                <h3 >Posisi : {job.positionName}</h3>
                <div dangerouslySetInnerHTML={{ __html: job.descriptions }}></div>
                <p>Status : {job.status}</p>
                <p>Gaji : IDR { currencyFormat(job.salaryFrom)} - IDR {currencyFormat(job.salaryTo)}</p>
            </div>
            <p style={{ textAlign: "end", fontWeight: "bold" }}>{job.postedDate !== undefined ? dateFormat(job.postedDate) : "-"} bulan yang lalu</p>
            {
            job.applied
            ? <button type='button' className='sendButtonDisable' >Lamaran Terkirim</button>
            : <button type='button' className='sendButton' onClick={applyJob}>Kirim Lamaran</button>}
        </div>
    );
}