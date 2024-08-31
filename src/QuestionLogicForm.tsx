import React, { useState } from 'react';
import GoldObject from './GoldObject';
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

    const filteredCountries = GoldObject.filter((item: Country) => {
        if (data.ocean === 'important' && !item.coast) return false;
        //probably don't have to define anything..
        //if (data.ocean === 'notImportant' && item.coast) return false;
        if (+data.ppm && +data.ppm <= item.ppm) return false;

        if (data.english === 'important' && !item.coast) return false;
        // if (data.english === 'notImportant' && item.coast) return false;
        if (data.dining === 'important' && !item.coast) return false;
        //if (data.dining === 'notImportant' && item.coast) return false;
        if (data.unsafe === 'important' && !item.coast) return false;
        // if (data.unsafe === 'notImportant' && item.coast) return false;
        if (data.education === 'important' && !item.coast) return false;
        // if (data.education === 'notImportant' && item.coast) return false;
        if (data.medical === 'important' && !item.coast) return false;
        // if (data.medical === 'notImportant' && item.coast) return false;
        if (data.nomadVisa === 'important' && !item.coast) return false;
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
                <label>
                    Ocean:
                    <select name="ocean" value={formData.ocean} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    PPM:
                    <input
                        type="number"
                        name="ppm"
                        value={formData.ppm} onChange={handleChange}
                    />
                </label>

                <label>
                    English:
                    <select name="english" value={formData.english} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    Dining:
                    <select name="dining" value={formData.dining} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    Unsafe:
                    <select name="unsafe" value={formData.unsafe} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    Education:
                    <select name="education" value={formData.education} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    Medical:
                    <select name="medical" value={formData.medical} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                <label>
                    Nomad Visa:
                    <select name="nomadVisa" value={formData.nomadVisa} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="important">Important</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </label>

                {/* define submit button */}

                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
};

// export QuestionLogicForm component
export default QuestionLogicForm; 