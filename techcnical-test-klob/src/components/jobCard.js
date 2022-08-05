import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { appliedStatus, postAppliedJob } from '../store/actions/appliedJobAction'

export default function JobCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{},[props.job.applied])

    function applyJob() {
        dispatch(appliedStatus("http://localhost:3000/fakeJob/" + props.job.id, props.job))
        dispatch(postAppliedJob("http://localhost:3001/appliedJobs", { ...props.job, applied: true }))
    }

    return (

        <div className="jobCard" >
            <div onClick={() => navigate(`/detail-lowongan-perkerjaan/${props.job.jobVacancyCode}`)}>
            <img src={props.job.corporateLogo} width="100px" />
            <div style={{textAlign: "start"}}>
                <h3 style={{marginBottom: "-8px"}}>{props.job.corporateName}</h3>
                <p>{props.job.positionName}</p>
                <p style={{ marginBottom: "-8px" }}>Status : {props.job.status}</p>
                <p>Gaji : {props.job.salaryFrom} - {props.job.salaryTo}</p>
            </div>
            <p style={{ textAlign: "end", fontSize: 12, fontWeight: "bold" }}>{props.job.postedDate}</p>
           </div>
            {
                props.job.applied
                    ? <button type="button" className="sendButtonCardDisable">Lamaran Terkirim</button>
                    : <button type="button" className="sendButtonCard" onClick={applyJob}>Kirim Lamaran</button>
            }
            
        </div>
    )
}