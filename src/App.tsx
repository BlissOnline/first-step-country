
// import QuestionLogicForm from './QuestionLogicForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import QuestionPage from './Pages/QuestionPage';  //import question component 
import CountryList from './Pages/CountryIndex';


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
          <Route path="/index" element={<CountryList />} />
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
