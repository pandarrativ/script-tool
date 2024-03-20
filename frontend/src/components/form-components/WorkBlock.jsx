import React,  {useState}  from 'react';
import FormInput from './FormInput';
import FormDateInput from './FormDateInput';
import DescriptionAIPanel from './DescriptionAIPanel';

function WorkBlock(props) {
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
        <div className='work-block'>
            <FormInput 
                className={"input-user-job"}
                id={`work-job-${props.item}`}
                type={"text"}
                placeholder={"Job Title"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-employer"}
                id={`work-employer-${props.item}`}
                type={"text"}
                placeholder={"Employer"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-worklocation"}
                id={`work-location-${props.item}`}
                type={"text"}
                placeholder={"Location"}
                onChange={props.onChange}
            ></FormInput>

            <FormDateInput 
                className={"input-user-work-start"}
                id={`work-start-${props.item}`}
                onChange={props.onChange}
            ></FormDateInput>

            <FormDateInput 
                className={"input-user-work-end"}
                id={`work-end-${props.item}`}
                onChange={props.onChange}
            ></FormDateInput>

            <FormInput 
                className={"input-user-currentwork"}
                id={`work-iscurrent-${props.item}`}
                type={"checkbox"}
                label={"I currently Work Here"}
                onChange={props.onChange}
            ></FormInput>


             <FormInput 
                className={"input-user-work-description1 input-user-work-description"}
                id={`work-description1-${props.item}`}
                type={"text"}
                placeholder={`Description 1`}
                onChange={props.onChange}
            ></FormInput> 

            <FormInput 
                className={"input-user-work-description2 input-user-work-description"}
                id={`work-description2-${props.item}`}
                type={"text"}
                placeholder={`Description 2`}
                onChange={props.onChange}
            ></FormInput> 

            <FormInput 
                className={"input-user-work-description3 input-user-work-description"}
                id={`work-description3-${props.item}`}
                type={"text"}
                placeholder={`Description 3`}
                onChange={props.onChange}
            ></FormInput> 


            <button className={`use-ai-btn input-user-work-description-use-ai`} onClick={useAI}>Use AI</button>


            <DescriptionAIPanel
                show={show}
                original={"asd"}
                modifed={""}
                id={`work-description-modified-${props.item}`}
                closePanel={closePanel}
            ></DescriptionAIPanel>



            {/* {props.item === 1 ? "": <button  className='form-remove-btn work-remove-btn' onClick={props.removeOne} id={`work-btn-${props.item}`}>Remove this work experience</button>} */}
            <button  className='form-remove-btn work-remove-btn' onClick={props.removeOne} id={`work-btn-${props.item}`}>Remove this work experience</button>
        </div>
    );
}

export default WorkBlock;