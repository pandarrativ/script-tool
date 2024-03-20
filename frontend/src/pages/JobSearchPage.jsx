import React, {useState} from 'react';
import { Pagination } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import "../assets/css/jobsearch.css"
import FormInput from '../components/form-components/FormInput';
import LetfArrowDark from "../assets/icons/icon_left_error_white.svg";
import LetfArrowLight from "../assets/icons/icon_left_error_black.svg";
import JobCard from '../components/JobCard';
import { job_list } from '../config/sampleConfig';
import Loading from '../components/Loading';

function JobSearchPage(props) {
    const [isLoading, setIsLoading] = useState(false);

    
    return (
        <div className='main'>
            <div className='search-page'>
                <div className='search-page-left'>
                    <div className='search-page-search'>
                        <button className='job-page-return-btn'>
                            <img src={props.lightMode ? LetfArrowLight : LetfArrowDark } alt="icon arrow"></img>
                        </button>
                        <form className='job-search-form' id="job-search-form">
                            <div className='job-search-form-heading'>Your Search</div>

                            <FormInput
                                type="text"
                                label="Era"
                                id="job-search-location"
                                placeholder={"Enter Era"}
                            ></FormInput>

                            <FormInput
                                type="text"
                                label="Coutry"
                                id="job-search-start-date"
                                placeholder={"Enter Coutry"}
                            ></FormInput>

                            <FormInput
                                type="text"
                                label="Type"
                                id="job-search-end-date"
                                placeholder={"Enter Type"}
                            ></FormInput>

                            <button className='job-search-btn'>Search</button>
                        </form>
                    </div>

                    <div className='search-page-filter'>
                        <div className='filter-group popular-filters'>
                            <div className='filer-label'>Popular Filters</div>
                            <FormInput
                                type="checkbox"
                                label="Adult"
                                id="filer-software-engineer"
                            ></FormInput>
                            
                            <FormInput
                                type="checkbox"
                                label="Action"
                                id="filer-entry-level"
                            ></FormInput>

                            <FormInput
                                type="checkbox"
                                label="Comedy"
                                id="filer-parttime"
                            ></FormInput>
                            
                            <FormInput
                                type="checkbox"
                                label="Romance"
                                id="filer-remote"
                            ></FormInput>
                            
                            <FormInput
                                type="checkbox"
                                label="Science Fiction"
                                id="filer-software-engineer"
                            ></FormInput>

                            <FormInput
                                type="checkbox"
                                label="Horror"
                                id="filer-software-engineer"
                            ></FormInput>

                            <FormInput
                                type="checkbox"
                                label="Drama"
                                id="filer-software-engineer"
                            ></FormInput>
                        </div>

                        {/* <div className='filter-group salary-filters'>
                            <div className='filer-label'>Popular Filters</div>
                            <FormInput
                                type="checkbox"
                                label="Entry level"
                                id="filer-salary-1"
                            ></FormInput>

                            <FormInput
                                type="checkbox"
                                label="Mid level"
                                id="filer-salary-2"
                            ></FormInput>
                            
                            <FormInput
                                type="checkbox"
                                label="Senior level"
                                id="filer-salary-3"
                            ></FormInput>
                            
                            <FormInput
                                type="checkbox"
                                label="Executive level"
                                id="filer-salary-4"
                            ></FormInput>
                        </div> */}
                    </div>
                </div>

                <div className='search-page-right'>
                    <div className='search-page-right-results'>140 jobs found</div>
                    <div className='search-page-right-heading'>
                        <div className='search-page-right-criterials'>Your search results...</div>
                        {/* <div className='search-page-right-sort'>Sort by</div> */}
                    </div>

                    <div className='search-page-right-content'>
                        {job_list.map((item, i) => {
                            return  (<JobCard 
                                        key={i}
                                        lightMode={props.lightMode}
                                        job = {item.job}
                                        company= {item.company}
                                        salary= {item.salary}
                                        info1= {item.info1}
                                        info2= {item.info2}
                                        info_right_top={item.info_right_top}
                                        info_right_down={item.info_right_down}
                                        jd={item.jd}
                                        setIsLoading={setIsLoading}
                                    ></JobCard>);
                        })}
                        
                    </div>

                    <div className='search-page-right-botom'>
                        <Pagination color={"primary"} count={1} showFirstButton showLastButton />
                        
                    </div>
                </div>
            </div>
            
            <Loading isLoading={isLoading}></Loading>
        </div>
    );
}

export default JobSearchPage;