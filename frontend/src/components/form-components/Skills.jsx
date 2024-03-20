import React, { useState } from 'react';
import FormInput from './FormInput';
import { skillsList } from '../../config/skillsList';
import DescriptionAIPanel from './DescriptionAIPanel';


function Skills(props) {
    const [skills, setSkills] = useState("")
    // change the value according to textarea input
    const handleChange = (e) => {
        const value = e.target.value;
        setSkills(value);
    };


    // the input of text
    const [skillInput, setSkillInput] = useState("");
    const handleSkillChange = (e) => {
        setSkillInput(e.target.value);
    }


    // add skills to textarea
    const addSkills = async (newskill) => {
        setSkills(skills + "," + newskill);
    }
    // add skills to textarea and clean input 
    const handleAddSkills = (e) => {
        e.preventDefault();
        addSkills(skillInput)
            .then(() => {
                setSkillInput("")
            })
    };


    const [show, setShow] = useState(false);

    const useAI = (e) => {
        e.preventDefault();
        setShow(true)
    }

    const closePanel = (e) => {
        e.preventDefault();
        setShow(false)
    }


    return (
        <div className='selection-form-subform form-skills' style={props.show ? {} : {display:"none"}}>
            <FormInput 
                className={"input-user-skills"}
                id={"skills"}
                type={"textarea"}
                placeholder={"Skills"}
                value={skills}
                // onChange={handleChange}
                useAI={useAI}
                onChange={props.onChange}
            ></FormInput>

            <DescriptionAIPanel
                show={show}
                original={"asd"}
                modifed={""}
                id={`skills-modified`}
                closePanel={closePanel}
            ></DescriptionAIPanel>

            <div className='skills-selection-input'>
                <input type="text" id="skills-select" name="skills-select" list="skills-list" value={skillInput} onChange={handleSkillChange}/>
                <datalist id="skills-list">
                    {skillsList.map((item, i) => {
                        return (
                            <option value={item} key={i}>{item}</option>
                        );
                    }) }

                </datalist>
                <button className='skills-add-btn' onClick={handleAddSkills}>Add</button>
            </div>
        </div>
    );
}

export default Skills;