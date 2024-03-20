import React, { useEffect, useState }  from 'react';
import "../assets/css/widgetselection.css";
import Pagination from '@mui/material/Pagination';
import { sageList } from '../config/SageConfig.js';
import WidgetInfo from '../components/WidgetInfo';

import { useSelector, useDispatch } from 'react-redux';
import { widgetAgentActions } from '../redux/widgetAgentSlice.js';


function WdigetSelectionPage(props) {
    const [sageLists, setSageLists] = useState([[]]);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };    

    const currentSage = useSelector((state) => state.localState.widgetInfo);
    const dispatch = useDispatch();

    const setCurrentSage = (widgetInfo) => {
        dispatch(widgetAgentActions.setCurrentAgent({widgetInfo:widgetInfo}));
    }


    useEffect(() => {
        // setCurrentSage(JSON.parse(localStorage.getItem("sage-info")));

        const result = [];
        const chunkSize = 3;
        for (let i = 0; i < sageList.length; i += chunkSize) {
          const chunk = sageList.slice(i, i + chunkSize);
          result.push(chunk);
        }
      
        setSageLists(result);
    }, [])


    return (
            <div className='widget-selection'>
                <div className='widget-selection-left'>
                    <div className='widget-selection-top'>
                        <div className='widget-selection-heading'>
                            Pick Your Director Agent!
                        </div>
                        <div className='widget-selection-currentsage'>
                            {`Current Sage: ${currentSage.sageFullName}`}
                        </div>
                    </div>

                    <div className='widget-selection-sages'>
                        {sageLists[page-1].map((item, i) => {
                            return (
                                <WidgetInfo
                                    key={i}
                                    sageInfo={item}
                                    isCurrent={currentSage.sageFullName === item.sageFullName}
                                    setCurrentSage={setCurrentSage}
                                ></WidgetInfo>
                            );
                        })}
                    </div>

                    <div className='widget-selection-pages'>
                        <Pagination count={sageLists.length} page={page} onChange={handleChange} color="primary" />
                    </div>
                </div>

            </div>
    );
}

export default WdigetSelectionPage;