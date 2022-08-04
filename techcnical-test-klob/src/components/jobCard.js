


export default function JobCard() {
    let job = {
        "jobVacancyCode": "KVCCRP000692",
        "positionName": "ADMIN HRD",
        "corporateId": "CRP000235",
        "corporateName": "Move Forward",
        "status": "Karyawan Kontrak",
        "descriptions": "<ul>\n<li>Melakukan proses penerimaan karyawan dari proses Screening sampai Recruiting</li>\n<li>Memperbaharui dan memelihara database, catatan, dan laporan SDM dengan data karyawan yang akurat</li>\n<li>Mempersiapkan kontrak kerja untuk karyawan baru perusahaan</li>\n<li>Melakukan penyusunan absensi atau daftar hadit karyawan perusahaan</li>\n<li>Memperisapkan berbagai macam internal letter dan outgoing letter</li>\n<li>Mempersiapkan segala kebutuhan karyawan</li>\n<li>Melakukan sosialisasi dan koordinasi terhadap seluruh karyawan</li>\n</ul> <p>If you desire to be part of something special, to be part of a winning team, to be part of a fun team - winning is fun.  We are looking forward to Project Manager in CIMB Niaga, based in Jakarta, Indonesia. In CIMB Niaga, making our work exciting, engaging, meaningful; ensuring safety, health, wellness; and being a model of inclusion & diversity are already embedded in who we are - it’s in our values, part of our vision, and our clearly defined aspirational goals. The primary function of the job is managing all the project implementation and services within the country<p/>",
        "corporateLogo": "https://filesdev.klob.id/public/mco01/kzsb9qzp/2022-02-18_175846.jpg",
        "applied": false,
        "workModel": { "id": "wt002", "text": "Hybrid" },
        "salaryFrom": 500000,
        "salaryTo": 17500000,
        "postedDate": "01/02/2022"
    };

    return (

        <div className="jobCard">
            <img src={job.corporateLogo} width="100px" />
            <div style={{textAlign: "start"}}>
                <h3 style={{marginBottom: "-8px"}}>{job.corporateName}</h3>
                <p>{job.positionName}</p>
                <p style={{ marginBottom: "-8px" }}>Status : {job.status}</p>
                <p>Gaji : {job.salaryFrom} - {job.salaryTo}</p>
            </div>
            <p style={{textAlign:"end"}}>{ job.postedDate}</p>
        </div>
    )
}