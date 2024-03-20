import React from 'react';
import "../assets/css/cvanalysis.css";
import CVAccordion from '../components/CVAccordion';
import SoftSkillBlock from '../components/SoftSkillBlock';

function CVAnalysisPage(props) {
    return (
        <div className='main'>
            <div className='cvanalysis-page'>
                <div className='cvanalysis-left-page'>
                    <div className='cvanalysis-left-heading'>
                        Understand Yourself
                    </div>

                    <div className='cvanalysis-softskills-section'>
                        <div className='cvanalysis-section-heading'>
                            Soft Skills
                        </div>
                        <div className='cvanalysis-section-description'>
                        Employers are looking to hire someone that not only demonstrates the necessarytechnical hard skills, but also demonstrates key soft skills and competencies throughtheir experiences. Here are five soft skills recruiters specifically look for, along with howyour resume stacked up against each.
                        </div>

                        <div className='softskills-body'>
                            <SoftSkillBlock></SoftSkillBlock>
                            <SoftSkillBlock></SoftSkillBlock>
                            <SoftSkillBlock></SoftSkillBlock>
                            <SoftSkillBlock></SoftSkillBlock>
                            <SoftSkillBlock></SoftSkillBlock>
                        </div>  
                    </div>
                </div>

                <div className='cvanalysis-right-page'>
                    <div className='cvanalysis-summary-section'>
                        <div className='cvanalysis-section-heading'>Strengths and Shortcomings</div>
                        <div className='cvanalysis-section-accordions'>
                            <CVAccordion 
                                lightMode={props.lightMode}
                                title={"Strengths"}
                                content={"contenasdadadsa"}
                            ></CVAccordion>

                            <CVAccordion 
                                lightMode={props.lightMode}
                                title={"Shortcomings"}
                                content={"contenasdadadsa"}
                            ></CVAccordion>
                        </div>
                     

                    </div>

                    <div className='cvanalysis-hardskills-section'>
                        <div className='cvanalysis-section-heading'>Hard Skills</div>
                        <div className='cvanalysis-section-description'>
                            lt's important that your resume contains the hard skills recruiters are looking for. Thisensures you check all the boxes from a resume screening standpoint (i.e. the ApplicantTracking System). lf you are unfamiliar with this, read this short and simple introduction
                        </div>

                        <div className='hardskills-body'>
                            <div className='hardskills-skill'>Java</div>
                            <div className='hardskills-skill'>JavaScript</div>
                            <div className='hardskills-skill'>Python</div>
                            <div className='hardskills-skill'>Django</div>
                            <div className='hardskills-skill'>React.js</div>
                            <div className='hardskills-skill'>Reacasdadadasdst.js</div>
                            <div className='hardskills-skill'>Go</div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default CVAnalysisPage;
