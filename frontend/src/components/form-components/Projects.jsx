import React ,{useState} from 'react';
import ProjectBlock from './ProjectBlock';

function Projects(props) {
    const [count, setCount] = useState(1);
    const [countList, setCountList] = useState([1]);

    const addOne = (e) => {
        e.preventDefault();
        setCountList([...countList, count + 1]);
        setCount(count + 1);
    };
    
    const removeOne = (e) => {
        e.preventDefault();
        const removeId = parseInt(e.target.id.slice(12))
        const newCountList = [];
        for(let i=0; i<countList.length; i++){
            if(countList[i] !== removeId) newCountList.push(countList[i]);
        }
        setCountList([...newCountList])
    }



    const renderProject = () => {
        return (
            countList.map((item, i) => {
                return (
                    <ProjectBlock key={i} item={item} removeOne={removeOne} onChange={props.onChange}></ProjectBlock>
                );
            })
        )
    }


    return (
        <div className='selection-form-subform form-projects' style={props.show ? {} : {display:"none"}}>
            {renderProject()}

            <div className='form-add-block'>
                <button className='form-add-btn projects-add-btn' onClick={addOne}>Add project experience</button>
            </div>
            
        </div>
    );
}

export default Projects;