
// import QuestionLogicForm from './QuestionLogicForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import QuestionPage from './Pages/QuestionPage';  //import question component 
import CountryList from './Pages/CountryList';
import CountryIndex from './Pages/CountryIndex';
//import filteredCountries from './QuestionLogicForm.js'

import goldObject from './goldObject';
//import goldObjectWithFlags from './utilities/goldObjectWithFlags';
//import goldObject from './goldObject.js';
//import { Country } from './types';


function App() {
  // might need hook useState here
  //const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout></Layout>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={Blog} /> */}
          <Route path='/about' element={<About />} />
          {/* <Route path="/contact" element={Contact} /> */}
          <Route path="/questions" element={<QuestionPage />} /> 
          {/* <Route path="/country-index" element={<CountryList countries={goldObjectWithFlags} />} /> */}
          {/* <Route path="/country-index" element={<CountryList countries={goldObject} />} /> */}
          <Route path="/country-index" element={<CountryIndex countries={goldObject} />} />
          {/* <Route path="/country-index" element={<CountryList countries={filteredCountries} />} /> */}
        </Routes>
      </Router>
      
      
      <div>
        {/* <h1>First Step Country</h1> */}

        {/* <QuestionLogicForm></QuestionLogicForm> */}
   
      </div>

    </>
  );
}

export default App
