import React from 'react';


function WidgetInfo(props) {
    const setSageAgent = (e) => {
        e.preventDefault();
        // localStorage.setItem("sage-info", JSON.stringify(props.sageInfo));
        props.setCurrentSage(props.sageInfo);
    }


    return (
        <div className={`widget-info current-sage-${props.isCurrent}`}>
            <div className='widget-info-left img-box'>
                <img src={props.sageInfo.image} alt="a img of a sage" className='box-img'></img>
            </div>

            <div className='widget-info-body'>
                <div className='widget-info-name'>
                    {props.sageInfo.sageFullName}
                </div>
                <div className='widget-info-1'>
                    {props.sageInfo.country}
                </div>

                <div className='widget-info-2'>
                    <div className='widget-info-2-heading'>
                        {props.sageInfo.sageFullName === "AI" ? "": "Famouse Movies"}
                    </div>
                    <div className='widget-info-2-content'>
                        {props.sageInfo.movies}
                    </div>
                </div>

                <div className='widget-info-3'>
                    <div className='widget-info-3-heading'>
                    {props.sageInfo.sageFullName === "AI" ? "": "Description"}
                    </div>

                    <div className='widget-info-3-content'>
                        {props.sageInfo.description}
                    </div>
                </div>

            </div>

            <div className='widget-info-right'>
                <button className='widget-info-btn' onClick={setSageAgent}>
                    {props.isCurrent ? "In Use" : "Pick him!"}
                </button>
            </div>
            
        </div>
    );
}

export default WidgetInfo ;