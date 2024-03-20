import React from 'react';
import IconLoading from "../assets/icons/Loading.svg";

function Loading(props) {
    return (
        <>
            <div className={`loading-container isloading-${props.isLoading}`}>
                <img className="loading" src={IconLoading} alt="loading icon"></img>
            </div>
            <div className={`loading-background isloading-${props.isLoading}`}></div>
        </>
    );
}

export default Loading;