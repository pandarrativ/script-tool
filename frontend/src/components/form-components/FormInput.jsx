import React from 'react';

function FormInput(props) {
    return (
        <div className={`form-input ${props.className}`}>
            <label htmlFor={props.id}> {props.label}
                {props.type === "textarea" ? 
                    <>
                        <div className='textarea-wrapper'> 
                            <textarea
                                placeholder={props.placeholder} 
                                id={props.id} name={props.id} 
                                required={props.required} 
                                value={props.value}
                                onChange={props.onChange}
                            ></textarea>
                        </div>
                        <button className={`use-ai-btn ${props.className}-use-ai`} onClick={props.useAI}>Use AI</button>
                    </>

                :               
                    <input 
                        type={props.type} 
                        placeholder={props.placeholder} 
                        id={props.id} name={props.id} 
                        required={props.required} 
                        value={props.value}
                        onChange={props.onChange}
                        // rows={props.rows}
                    ></input>
                }
            </label>
        </div>
    );
}

export default FormInput;