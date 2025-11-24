import './team.css'


export default function TeamStructure() {



    return (
        <div>
             <h2 className='section-title'>
                Team Structure
            </h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Awareness & Community Engagement
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Child Protection Awareness Facilitator</li>
                                <li>Parenting Skills Facilitator</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Psychosocial & Mental Health Support
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>PSS Facilitator</li>
                                <li>Psychologist / Mental Health Counselor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Case Management & Field Operations
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Case Manager</li>
                                <li>Case Management Technical Supervisor</li>
                                <li>Mobile Team Supervisor</li>
                                <li>Field Team Leader</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
