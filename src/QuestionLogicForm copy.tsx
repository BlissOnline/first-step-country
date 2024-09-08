import React, { useState } from 'react';
import goldObject from './goldObject.js';
import { Country } from './types';
import Q1 from './components/Questions/Q1.js';
import Q2 from './components/Questions/Q2';

//defining Component with useState hook being an object
const QuestionLogicForm: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        ocean: '',
        ppm: '',
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
        setCurrentPage(prevPage => prevPage + 1);
    };

    // prev page on click

    // define hadnleSubmit function logic
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
    
    // defining the JSX of our component 

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    {currentPage === 0 && (
                        <Q1 value={formData.ocean} onChange={handleChange} onNext={showNextPage} />         
                    )}
                    {/* add more questions */}

                    {currentPage === 1 && (
                        <Q2 value={formData.ppm} onChange={handleChange} onNext={showNextPage} />         
                    )}
                    {/* add more questions */}
                    
                    <div className={`question-page page-0 ${currentPage === 0 ? 'active' : ''}`}>
                        <label>Access to the ocean?</label><br />
                        <label> Important
                            <input type='radio' name="ocean" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="ocean" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                    {/* <div className={`question-page page-0 ${currentPage === 0 ? 'active' : ''}`}>
                        <label>Access to the ocean?</label><br />
                        <label> Important
                            <input type='radio' name="ocean" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="ocean" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div> */}
                    

                    <div className={`question-page page-1 ${currentPage === 1 ? 'active' : ''}`}>
                        <label>What is your max monthly budget for living expenses?</label><br />
                        <label> 
                            <input name='ppm' type='number' value={formData.ppm} onChange={handleChange}/>
                        </label> <br /> <br />
                        <button type='button' onClick={showNextPage}> next step </button>
                    </div>
                
                

                    <div className={`question-page page-2 ${currentPage === 2 ? 'active' : ''} `}>
                        <label>Do you want your country to have English speakers?</label><br />
                        <label> Important
                            <input type='radio' name="english" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="english" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                    
                    <div className={`question-page page-3 ${currentPage === 3 ? 'active' : ''}`}>
                        <label>Do you want your country to have affordable dining options?</label><br />
                        <label> Important
                            <input type='radio' name="dining" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="dining" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                
                    <div className={`question-page page-4 ${currentPage === 4 ? 'active' : ''}`}>
                        <label>Do you want your country to be considered safe? (a level 2 risk or higher, will be excluded from your country list)</label><br />
                        <label> Important
                            <input type='radio' name="unsafe" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="unsafe" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                
                    <div className={`question-page page-5 ${currentPage === 5 ? 'active' : ''}`}>
                        <label>High-quality education options for foreigners, at a great price?</label><br />
                        <label> Important
                            <input type='radio' name="education" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="education" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                    
                    <div className={`question-page page-6 ${currentPage === 6 ? 'active' : ''}`}>
                        <label>Available high-quality and affordable medical tourism?</label><br />
                        <label> Important
                            <input type='radio' name="medical" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="medical" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                
                    <div className={`question-page page-7 ${currentPage === 7 ? 'active' : ''}`}>
                        <label>Do you want your country to offer an official digital nomad visa or special permits for remote workers?</label><br />
                        <label> Important
                            <input type='radio' name="nomadVisa" value="important" onChange={handleChange} onClick={showNextPage}/>
                        </label>
                        <label> Not Important
                            <input type='radio' name="nomadVisa" value="notImportant" onChange={handleChange} onClick={showNextPage}/>
                        </label> <br /> <br />
                    </div>
                    

                    {/* define submit button */}
                    <div className={`question-page page-submit ${currentPage === 8 ? 'active' : ''}`}>
                        <button type="submit" >Submit</button>
                    </div>

                    
                    
                </form>
            </div>
        );
    };

// export QuestionLogicForm component
// export default QuestionLogicForm; 