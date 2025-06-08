import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
// import './App.css';
import About from '../app/about/about';
import Home from '../app/page';
// import Contact from './Pages/Contact';
import QuestionPage from '../components/question-components/QuestionPage';
import CountryIndex from '../app/country-index/page';
// import goldObject from './goldObject';

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          {/* <Route path="/countryIndex" element={<CountryIndex countries={goldObject} />} /> */}
          <Route path="/country-index" element={<CountryIndex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
