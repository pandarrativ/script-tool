import React from 'react';
import FormInput from './FormInput';
import FormDateInput from './FormDateInput';

function EducationBlock(props) {

    return (
        <div className='education-block'>
            <FormInput 
                className={"input-user-school"}
                id={`education-school-${props.item}`}
                type={"text"}
                placeholder={"School Name"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-school-location"}
                id={`education-school-location-${props.item}`}
                type={"text"}
                placeholder={"Location/City"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-degree"}
                id={`education-degree-${props.item}`}
                type={"text"}
                placeholder={"Degree"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-field"}
                id={`education-field-${props.item}`}
                type={"text"}
                placeholder={"Field Of Study"}
                onChange={props.onChange}
            ></FormInput>

            <FormDateInput 
                className={"input-user-edu-start"}
                id={`education-start-${props.item}`}
                onChange={props.onChange}
            ></FormDateInput>

            <FormDateInput 
                className={"input-user-edu-end"}
                id={`education-end-${props.item}`}
                onChange={props.onChange}
            ></FormDateInput>

            <FormInput 
                className={"input-user-currentedu"}
                id={`education-iscurrent-${props.item}`}
                type={"checkbox"}
                label={"I currently Study Here"}
                onChange={props.onChange}
            ></FormInput>

            {/* {props.item === 1 ? "" :<button  className='form-remove-btn education-remove-btn' onClick={props.removeOne} id={`edu-btn-${props.item}`}>Remove this education</button>} */}
            <button  className='form-remove-btn education-remove-btn' onClick={props.removeOne} id={`edu-btn-${props.item}`}>Remove this education</button>
        </div>
    );
}

export default EducationBlock;