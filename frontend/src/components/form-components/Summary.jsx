import React, {useState} from 'react';
import FormInput from './FormInput';
import DescriptionAIPanel from './DescriptionAIPanel';

function Summary(props) {
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
        <div className='selection-form-subform form-summary' style={props.show ? {} : {display:"none"}}>
            <FormInput 
                className={"input-user-summary"}
                id={"summary"}
                type={"textarea"}
                placeholder={"Summary"}
                useAI={useAI}
                onChange={props.onChange}
            ></FormInput>

            
            <DescriptionAIPanel
                show={show}
                original={"asd"}
                modifed={""}
                className={"input-user-summary-modified"}
                id={`summary-modified`}
                closePanel={closePanel}
            ></DescriptionAIPanel>
        </div>
    );
}

export default Summary;