import React from 'react';

function DescriptionAIPanel(props) {


    return (
        <div className='description-ai-panel' style={props.show ? {} : {display:"none"}}>
            <div className='description-ai-panel-top'>
                <div className='description-ai-panel-left'>
                    <div className='description-ai-panel-left-heading'>
                        Origional Description: 

                    </div>
                    <div className='description-ai-panel-left-content'>
                        {props.original}
                    </div>
                </div>

                <div className='description-ai-panel-right'>
                    <div className='description-ai-panel-right-heading'>
                        {`Output <Feel Free to Edit>:`} 
                    </div>
                    <textarea className='description-ai-panel-right-content' value={props.modified} id={props.id}>
                    </textarea>
                    
                </div>

            </div>

            <div className='description-ai-panel-bottom'>
                <button className='description-ai-panel-btn-edit'>Edit</button>
                <button className='description-ai-panel-btn-confirm' onClick={props.closePanel}>Confirm</button>
            </div>
            
        </div>
    );
}

export default DescriptionAIPanel;