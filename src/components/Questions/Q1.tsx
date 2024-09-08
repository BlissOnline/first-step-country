import React from 'react';


//define props interface if your component will receive any props
interface Q1Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}

//wrap in form instead of div
//onSubmit in each form


//handle submit

//we made adapter from handler to form
//better to work with values 
  //than we know our name in question logic form
//better wat 

//rewrite, beter to not pass events 
//dont want to work with events on other side of components
//simple value 

//define the Functional Component 
const Q1: React.FC<Q1Props> = ({ value, onChange, onNext }) => {

    //handle submit ,close function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //same time issue onNext is looking at intial state and not the new update onChange state
        onChange(e.target[0].value);
        onNext();
    };

        //const formData = new FormData(event.currentTarget);
        //useEffect hook 

    return (
        <form onSubmit={handleSubmit} >
            <label>Access to the ocean?</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="ocean" value="important"  />
            </label>
            <label> Not Important
                <input type='radio' name="ocean" value="notImportant"  />
            </label>
            <button type='submit'>testing 123</button>
        </form>
    );
};

export default Q1;