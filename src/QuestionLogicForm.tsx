import React, { useState } from 'react';
import goldObject from './goldObject.js';
import { Country } from './types';

//defining Component with useState hook being an object
const QuestionLogicForm: React.FC = () => {
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
                <div>
                    <label>Access to the ocean?</label><br />
                    <label> Important
                        <input type='radio' name="ocean" value="important" onChange={handleChange} />
                    </label>
                    <label> Not Important
                        <input type='radio' name="ocean" value="notImportant" onChange={handleChange} />
                    </label> <br /> <br />
                </div>
                

                <div>
                    <label>What is your max monthly budget for living expenses?</label><br />
                    <label> 
                        <input name='ppm' type='number' value={formData.ppm} onChange={handleChange}/>
                    </label> <br /> <br />
                </div>
               


                <label>Do you want your country to have English speakers?</label><br />
                <label> Important
                    <input type='radio' name="english" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="english" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                <label>Do you want your country to have affordable dining options?</label><br />
                <label> Important
                    <input type='radio' name="dining" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="dining" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                <label>Do you want your country to be considered safe? (a level 2 risk or higher, will be excluded from your country list)</label><br />
                <label> Important
                    <input type='radio' name="unsafe" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="unsafe" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                <label>High-quality education options for foreigners, at a great price?</label><br />
                <label> Important
                    <input type='radio' name="education" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="education" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                <label>Available high-quality and affordable medical tourism?</label><br />
                <label> Important
                    <input type='radio' name="medical" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="medical" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                <label>Do you want your country to offer an official digital nomad visa or special permits for remote workers?</label><br />
                <label> Important
                    <input type='radio' name="nomadVisa" value="important" onChange={handleChange}/>
                </label>
                <label> Not Important
                    <input type='radio' name="nomadVisa" value="notImportant" onChange={handleChange}/>
                </label> <br /> <br />

                {/* define submit button */}

                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
};

// export QuestionLogicForm component
export default QuestionLogicForm; 