import React, {useState} from 'react';
import SampleImg from "../assets/imgs/image.png";
import "../assets/css/jobcard.css";
import BookMarkDarkNo from "../assets/icons/icon_dark_no.svg";
import BookMarkDarkYes from "../assets/icons/icon_dark_yes.svg";
import BookMarkLightNo from "../assets/icons/icon_light_no.svg";
import BookMarkLightYes from "../assets/icons/icon_light_yes.svg";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { fittingAnalysisRouter } from '../config/routerConfig';
import TransitionsModal from './TransitionsModal';


function JobCard(props) {
    const navigate = useNavigate();
    const [isSave, setIsSave] = useState(false);
    const toggleSave = (e) => {
        e.preventDefault();
        setIsSave(!isSave);
    }
    const renderBookMark = () => {
        if(props.lightMode && isSave){
            return BookMarkLightYes;
        }else if(props.lightMode && ! isSave){
            return BookMarkLightNo;
        }else if(!props.lightMode && isSave){
            return BookMarkDarkYes;
        }else{
            return BookMarkDarkNo;
        }
    }

    const nextPage = (e) => {
        e.preventDefault();

        // check user cv_id
        if(! localStorage.getItem("cv_id")){
            alert("Please create your resume first!")
            navigate("/home");
            return;
        }
        // set job
        localStorage.setItem("job-info", JSON.stringify({
            job:props.job,
            company:props.company,
            jd:props.jd,
        }))

        props.setIsLoading(true);
        axios.post(fittingAnalysisRouter, {
            cv_id: localStorage.getItem("cv_id"),
            job:"Software Engineer",
            company:"Amazon",
            jd: props.jd,
        })
        .then((resp) => {
            console.log(resp.data);

            localStorage.setItem("fitting_analysis_resp", JSON.stringify(resp.data));
            props.setIsLoading(false);
            navigate("/fitting-analysis");
        })
        .catch((e) => {
            console.log(e);
            alert(e);
        })
    }



    return (
        <div className='jobcard'>
            <div className='card-left'>
                <img className='card-img' src={SampleImg} alt="a sample img"></img>
            </div>

            <div className='card-mid'>
                <div className='job-title'>{props.job}</div>
                <div className='job-company'>{props.company}</div>
                
                <div className='job-info-list'>
                    <div>{props.info1}</div>
                    <div>{props.info2}</div>
                </div>
                <TransitionsModal
                    lightMode={props.lightMode}    
                    jd={props.jd}
                ></TransitionsModal>
            </div>


            <div className='card-right'>
                <div className='card-right-top'>
                    <div className='card-right-info'>
                        <div className='card-right-info-1'>Prepare for you</div>
                        <div className='card-right-info-2'>{props.info_right_up}</div>
                    </div>
                    <button className='card-save-btn' onClick={toggleSave}>
                        <img src={renderBookMark()} alt="icon bookmark"></img> 
                    </button>
                </div>

                <div className='card-right-bottom'>
                    <div className='card-right-bottom-1'>{props.salary}</div>
                    <div className='card-right-bottom-2'>{props.info_right_down}</div>
                    <button className='card-experience-btn' onClick={nextPage}>Experience!</button>
                </div>


            </div>
        </div>
    );
}

export default JobCard;