import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import iconLightUp from "../assets/icons/icon-arrow-light-up.svg";
import iconLightDown from "../assets/icons/icon-arrow-light-down.svg";
import iconAdd from "../assets/icons/Add.svg";
import iconDelete from "../assets/icons/Delete.svg";
import { scriptCreationActions } from '../redux/scriptCreationSlice';
import "../assets/css/elements.css";
import { localStateSliceActions } from '../redux/localStateSlice';

function Elements(props) {
    const elements = useSelector((state) => state.scriptCreation.data.elements);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState([]);
    const isElementChannged = useSelector((state) => state.localState.elementChanged);
    const toggleExpanded = (ele) => {
        if(expanded.includes(ele)){
            setExpanded(expanded.filter(item => item !== ele));
        }else{
            setExpanded([...expanded, ele])
        }
    }

    const [showModal, setShowModal] = useState("");
    const [elementName, setElementName] = useState("");
    const [elementItem, setElementItem] = useState("");
    const toggleShowModal = (ele) => {
        setShowModal(ele);
    };


    const renderModal = () => {
        if(showModal === "Add Element"){
            return (
                <div className='element-modal'>
                    <div className='element-modal-top'>Element:</div>
                    <input className='element-modal-input' value={elementName} onChange={(e) => setElementName(e.target.value)}></input>
                    <div className='element-modal-btns'>
                        <button onClick={() => {
                            toggleShowModal("");
                            setElementName("");
                        }}>Cancel</button>
                        <button onClick={() => {
                            dispatch(scriptCreationActions.addElement({elementName:elementName}));
                            toggleShowModal("");
                            setElementName("");
                            dispatch(localStateSliceActions.setElementChanged({newState:true}));
                        }}>Confirm</button>
                    </div>
                </div> 
            );
        }else if(showModal === "Delete Item"){
            return (
                <div className='element-modal'>
                    <div className='element-modal-top'>Confirm Delete?</div>
                        <div className='element-modal-btns'>
                            <button onClick={() => {
                                toggleShowModal("");
                                setElementName("");
                                setElementItem("");
                            }}>Cancel</button>
                            <button onClick={() => {
                                dispatch(scriptCreationActions.removeElementItem({elementName:elementName, item:elementItem}));    
                                toggleShowModal("");
                                setElementName("");
                                setElementItem("");
                                dispatch(localStateSliceActions.setElementChanged({newState:true}));
                            }}>Confirm</button>
                        </div>
                </div>
            );    
        }else if(showModal === "Add Item"){
            console.log()
            return (
                <div className='element-modal'>
                    <div className='element-modal-top'>{elementName + ":"}</div>
                        <input className='element-modal-input' value={elementItem} onChange={(e) => setElementItem(e.target.value)}></input>
                        <div className='element-modal-btns'>
                            <button onClick={() => {
                                toggleShowModal("");
                                setElementName("");
                                setElementItem("");
                            }}>Cancel</button>
                            <button onClick={() => {
                                dispatch(scriptCreationActions.addElementItem({elementName:elementName, item:elementItem})); 
                                toggleShowModal("");   
                                setElementName("");
                                setElementItem("");
                                dispatch(localStateSliceActions.setElementChanged({newState:true}));
                            }}>Confirm</button>
                    </div>
                </div>  
            )  
        }else if(!showModal){
            return <></>;
        }
    }


    return (
        <div className='elements'>
            {elements.map((element, i) => {
                return (
                    <div className={`element element-expand-${expanded.includes(element.element)}`} key={i} >
                        <div className='element-cate' onClick={() => toggleExpanded(element.element)}>
                            <span> {element.element}</span>
                            {expanded.includes(element.element) ? <img src={iconLightUp} alt="icon"></img>:<img src={iconLightDown} alt="icon"></img>}
                        </div>
                        <div className='element-sub'>
                            {element.items.map((item, j) => {
                                return (
                                    <div className='element-item' key={j}>
                                        <div>{item}</div><img src={iconDelete} alt="delete" className='element-sub-delete-btn' onClick={() => {
                                            setElementItem(item);
                                            setElementName(element.element);
                                            toggleShowModal("Delete Item");
                                        }}></img>
                                    </div>);
                            })}
                            <div className='element-item element-sub-add-btn' onClick={() => {
                                toggleShowModal("Add Item");
                                setElementName(element.element);
                            }}>
                                <img src={iconAdd} alt="add icon"></img>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className='element element-add-btn' onClick={() => {
                toggleShowModal("Add Element");
            }}>
                <span>Add</span>
                <img src={iconAdd} alt="add icon"></img>
                
            </div>

            {showModal ? <div className='modal-bg'></div>: ""}

            {renderModal()}
        

        </div>
    );
}

export default Elements;