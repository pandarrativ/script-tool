import React, { useState } from 'react';
import EducationBlock from './EducationBlock';

function Education(props) {
    const [count, setCount] = useState(1);
    const [countList, setCountList] = useState([1]);

    const addOne = (e) => {
        e.preventDefault();
        setCountList([...countList, count + 1]);
        setCount(count + 1);
    };
    
    const removeOne = (e) => {
        e.preventDefault();
        const removeId = parseInt(e.target.id.slice(8))
        const newCountList = [];
        for(let i=0; i<countList.length; i++){
            if(countList[i] !== removeId) newCountList.push(countList[i]);
        }
        setCountList([...newCountList])
    }


    const renderEdu = () => {
        return (
            countList.map((item, i) => {
                return (
                    <EducationBlock key={i} item={item} removeOne={removeOne} onChange={props.onChange}></EducationBlock>
                );
            })        
        );
        
    }


    return (
        <div className='selection-form-subform form-education' style={props.show ? {} : {display:"none"}}>
                {renderEdu()}

                <div className='form-add-block'>
                    <button className='form-add-btn education-add-btn' onClick={addOne}>Add education</button>
                </div>
        </div>
    );
}

export default Education;