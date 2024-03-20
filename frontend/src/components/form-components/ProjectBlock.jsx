import React, { useState } from 'react';
import FormInput from './FormInput';
import FormDateInput from './FormDateInput';
import DescriptionAIPanel from './DescriptionAIPanel';

function ProjectBlock(props) {
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
        <div className='project-block' >
                        <FormInput 
                            className={"input-user-project"}
                            id={`project-projectname-${props.item}`}
                            type={"text"}
                            placeholder={"Project Title"}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormInput 
                            className={"input-user-project-role"}
                            id={`project-role-${props.item}`}
                            type={"text"}
                            placeholder={"Role"}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormInput 
                            className={"input-user-project-location"}
                            id={`project-location-${props.item}`}
                            type={"text"}
                            placeholder={"Location"}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormInput 
                            className={"input-user-project-link"}
                            id={`project-link-${props.item}`}
                            type={"text"}
                            placeholder={"Link"}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormDateInput 
                            className={"input-user-project-start"}
                            id={`project-start-${props.item}`}
                            onChange={props.onChange}
                        ></FormDateInput>

                        <FormDateInput 
                            className={"input-user-project-end"}
                            id={`project-end-${props.item}`}
                            onChange={props.onChange}
                        ></FormDateInput>

                        {/* <FormInput 
                            className={"input-user-project-description"}
                            id={`project-description-${props.item}`}
                            type={"textarea"}
                            placeholder={`Description`}
                            useAI={useAI}
                        ></FormInput> */}

                        <FormInput 
                            className={"input-user-project-description input-user-project-description1"}
                            id={`project-description1-${props.item}`}
                            type={"text"}
                            placeholder={`Description 1`}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormInput 
                            className={"input-user-project-description input-user-project-description2"}
                            id={`project-description2-${props.item}`}
                            type={"text"}
                            placeholder={`Description 2`}
                            onChange={props.onChange}
                        ></FormInput>

                        <FormInput 
                            className={"input-user-project-description input-user-project-description3"}
                            id={`project-description3-${props.item}`}
                            type={"text"}
                            placeholder={`Description 3`}
                            onChange={props.onChange}
                        ></FormInput>

                        <button className={`use-ai-btn input-user-project-description-use-ai`} onClick={useAI}>Use AI</button>

                        <DescriptionAIPanel
                            show={show}
                            original={"asd"}
                            modifed={""}
                            id={`project-description-modified-${props.item}`}
                            closePanel={closePanel}
                        ></DescriptionAIPanel>



                        {/* {props.item === 1 ? "": <button  className='form-remove-btn project-remove-btn' onClick={props.removeOne} id={`project-btn-${props.item}`}>Remove this project experience</button>} */}
                        <button  className='form-remove-btn project-remove-btn' onClick={props.removeOne} id={`project-btn-${props.item}`}>Remove this project experience</button>
                       
                    </div>
    );
}

export default ProjectBlock;