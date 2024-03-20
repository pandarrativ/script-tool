import React, {useState} from 'react';
import WorkBlock from './WorkBlock';


function Work(props) {
    const [count, setCount] = useState(1);
    const [countList, setCountList] = useState([1]);

    const addOne = (e) => {
        e.preventDefault();
        setCountList([...countList, count + 1]);
        setCount(count + 1);
    };
    
    const removeOne = (e) => {
        e.preventDefault();
        const removeId = parseInt(e.target.id.slice(9))
        const newCountList = [];
        for(let i=0; i<countList.length; i++){
            if(countList[i] !== removeId) newCountList.push(countList[i]);
        }
        setCountList([...newCountList])
    }



    const renderWork = () => {
        return (
            countList.map((item, i) => {
                return (
                    <WorkBlock key={i} item={item} removeOne={removeOne} onChange={props.onChange}></WorkBlock>
                );
            })
        );
    }


    return (
        <div className='selection-form-subform form-work' style={props.show ? {} : {display:"none"}}>
            {renderWork()}

            <div className='form-add-block'>
                <button className='form-add-btn work-add-btn' onClick={addOne}>Add work experience</button>
            </div>
            
        </div>
    );
}

export default Work;