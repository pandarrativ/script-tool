import React, {useState} from 'react';
import BasicInfo from './form-components/BasicInfo';
import "../assets/css/selectionform.css";
import Education from './form-components/Education';
import Work from './form-components/Work';
import Skills from './form-components/Skills';
import Summary from './form-components/Summary';
import Projects from './form-components/Projects';
import pdfRouter, { latexToPDFRouter } from '../config/routerConfig';
import axios from "axios";

function SelectionForm(props) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };



    const submitSelectionForm = (e) => {
        e.preventDefault();
        console.log(formData)

        props.setIsLoading(true);
        axios.post(latexToPDFRouter, {
            temp_id: localStorage.getItem("temp-id"),
            formData
        })
        .then((resp) => {
            // console.log(resp.data);
            props.setPdfURL(pdfRouter(resp.data.pdf_file));
            localStorage.setItem("cv_pdf_url", pdfRouter(resp.data.pdf_file));
            localStorage.setItem("cv_id", resp.data.cv_id);
            props.setIsLoading(false);
        })
        .catch((e) => {
            console.log(e);
        })



    }

    const [current, setCurrent] = useState("");
    const handleOnChange = (e) => {
        setCurrent(e.target.value);
    }


    return (
        <form onSubmit={submitSelectionForm} className='selection-form'>
            <div className='selection-form-selectors'>
                <select placeholder='--Category' className='selection-form-category' name='category' onChange={handleOnChange} id="ignore">
                    <option value="">--Category--</option>
                    <option value="basic">Basic Information</option>
                    <option value="education">Education</option>
                    <option value="work">Working Experience</option>
                    <option value="projects">Projects</option>
                    <option value="skills">Skills</option>
                    <option value="summary">Summary</option>
                </select>
                {/* <input placeholder='--Category' className='selection-form-subcategory'></input> */}
            </div>

            <BasicInfo show={current === "basic"} onChange={handleChange}></BasicInfo> 
            <Education show={current === "education"} onChange={handleChange}></Education> 
            <Work show={current === "work"} onChange={handleChange}></Work> 
            <Projects show={current === "projects"} onChange={handleChange}></Projects> 
            <Skills show={current === "skills"} onChange={handleChange}></Skills>
            <Summary show={current === "summary"} onChange={handleChange}></Summary>


            <button className='user-selection-form-submit' type='submit'>Submit</button>
        </form>
    );
}

export default SelectionForm;