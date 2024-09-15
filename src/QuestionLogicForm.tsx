import React, { useState } from 'react';
import goldObject from './goldObject.js';
import { Country } from './types';
import Q1 from './components/Questions/Q1.tsx';
import Q2 from './components/Questions/Q2.tsx';
import Q3 from './components/Questions/Q3.tsx';
import Q4 from './components/Questions/Q4.tsx';
import Q5 from './components/Questions/Q5.tsx';
import Q6 from './components/Questions/Q6.tsx';
import Q7 from './components/Questions/Q7.tsx';
import Q8 from './components/Questions/Q8.tsx';
import ShowResults from './components/Questions/ShowResults.tsx';

//defining Component with useState hook being an object
const QuestionLogicForm: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        ocean: '',
        ppm: 0, //initialize ppm as a number
        english: '',
        dining: '',
        unsafe: '',
        education: '',
        medical: '',
        nomadVisa: '' 
    });

    //defining handleChange function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // next page on click
    const showNextPage = () => {
        console.log(formData);
        setCurrentPage(prevPage => prevPage + 1);
    };

    // prev page on click

    // define hadnleSubmit function logic
    //we need d
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = formData;



        // all the if statement logic

        const filteredCountries = goldObject.filter((item: Country) => {
            if (data.ocean === 'important' && !item.coast) return false;
            //probably don't have to define anything..
            //if (data.ocean === 'notImportant' && item.coast) return false;
            if (+data.ppm && +data.ppm <= item.ppm) return false;

            if (data.english === 'important' && !item.englishSpeaking) return false;
            // if (data.english === 'notImportant' && item.coast) return false;
            if (data.dining === 'important' && !item.affordableDining) return false;
            //if (data.dining === 'notImportant' && item.coast) return false;
            if (data.unsafe === 'important' && item.unsafe) return false;
            // if (data.unsafe === 'notImportant' && item.coast) return false;
            if (data.education === 'important' && !item.affordableDining) return false;
            // if (data.education === 'notImportant' && item.coast) return false;
            if (data.medical === 'important' && !item.affordableHealthCare) return false;
            // if (data.medical === 'notImportant' && item.coast) return false;
            if (data.nomadVisa === 'important' && !item.nomadVisa) return false;
            // if (data.nomadVisa === 'notImportant' && item.coast) return false;

            return true;
        });

        // think just logging our result?
        console.log(filteredCountries);
        console.log(data);

    };
    
    //() => {}  ...empty arrow function
    // defining the JSX of our component 

        return (
            <div>
                <div>
                    {currentPage === 0 && (
                        <Q1 value={formData.ocean} onChange={(value) => {
                            setFormData({
                                ...formData,
                                ocean: value
                            });
                        }} onNext={showNextPage} />         
                    )}

                    {/* {currentPage === 0 && (
                        <Q1 value={formData.ocean} onChange={handleChange} onNext={showNextPage}/>         
                    )} */}
                    {/* add more questions */}

                    {currentPage === 1 && (
                        <Q2 value={formData.ppm} onChange={handleChange} onNext={showNextPage} />         
                    )}
                    {/* add more questions */}

                    {currentPage === 2 && (
                        <Q3 value={formData.english} onChange={(value) => {
                            setFormData({
                                ...formData,
                                english: value
                            });
                        }} onNext={showNextPage} />         
                    )}

                    {/* {currentPage === 2 && (
                        <Q3 value={formData.english} onChange={handleChange} onNext={showNextPage} />         
                    )} */}
                    {/* add more questions */}

                    {currentPage === 3 && (
                        <Q4 value={formData.dining} onChange={(value) => {
                            setFormData({
                                ...formData,
                                dining: value
                            });
                        }} onNext={showNextPage} />         
                    )}
                    {/* add more questions */}


                    {currentPage === 4 && (
                        <Q5 value={formData.unsafe} onChange={(value) => {
                            setFormData({
                                ...formData,
                                unsafe: value
                            });
                        }} onNext={showNextPage} />         
                    )}

                    {/* {currentPage === 4 && (
                        <Q5 value={formData.unsafe} onChange={handleChange} onNext={showNextPage} />
                    )} */}
                
                    
                    {currentPage === 5 && (
                            <Q6 value={formData.education} onChange={(value) => {
                                setFormData({
                                    ...formData,
                                    education: value
                                });
                            }} onNext={showNextPage} /> 
                    )}


                    {currentPage === 6 && (
                            <Q7 value={formData.medical} onChange={(value) => {
                                setFormData({
                                    ...formData,
                                    medical: value
                                });
                            }} onNext={showNextPage} /> 
                    )}


                    {currentPage === 7 && (
                            <Q8 value={formData.nomadVisa} onChange={(value) => {
                                setFormData({
                                    ...formData,
                                    nomadVisa: value
                                });
                            }} onNext={showNextPage} /> 
                    )}

                    <div className={`question-page page-submit ${currentPage === 8 ? 'active' : ''}`}>
                        {currentPage === 8 && (
                            <ShowResults handleSubmit={handleSubmit} />
                        )}
                    </div>

                    
{/* remove type submiit add onClick={} */}
{/* or form to link, combine some kind of search, another page,  */}
{/* submit button can be link, /question ->  /search */}
{/* /search?ppm=100&ocean=important */}
                    {/* define submit button */}
                    
                    {/* <div className={`question-page page-submit ${currentPage === 8 ? 'active' : ''}`}>
                        <button onClick={handleSubmit} >Submit</button>                      
                    </div> */}



                    
                    
                </div>
            </div>
        );
    };

// export QuestionLogicForm component
export default QuestionLogicForm; 