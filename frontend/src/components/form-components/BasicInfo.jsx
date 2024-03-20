import React from 'react';
import FormInput from './FormInput';

function BasicInfo(props) {
    return (
        <div className='selection-form-subform form-basic-info' style={props.show ? {} : {display:"none"}}>

            <FormInput 
                className={"input-user-name"}
                id={"basicinfo-name"}
                type={"text"}
                placeholder={"Name"}
                onChange={props.onChange}
            ></FormInput>


            <FormInput 
                className={"input-user-city"}
                id={"basicinfo-city"}
                type={"text"}
                placeholder={"City"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-state"}
                id={"basicinfo-state"}
                type={"text"}
                placeholder={"State/Province"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-zipcode"}
                id={"basicinfo-zipcode"}
                type={"text"}
                placeholder={"Zip Code"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-phone"}
                id={"basicinfo-phone"}
                type={"text"}
                placeholder={"Phone"}
                onChange={props.onChange}
            ></FormInput>

            <FormInput 
                className={"input-user-email"}
                id={"basicinfo-email"}
                type={"email"}
                placeholder={"Email"}
                onChange={props.onChange}
            ></FormInput>
        </div>
    );
}

export default BasicInfo;