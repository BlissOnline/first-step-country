
import QuestionLogicForm from './QuestionLogicForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavigationBar/NavBar';
import './App.css';
import About from './Pages/About';
import YPPP from './assets/images/affordable-dining-graphic.png';

function App() {
  // might need hook useState here
  //const [count, setCount] = useState(0)

  return (
    <>
      
      <img src='/public/vite.svg' />
      <img src={YPPP} />

      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={Home} /> */}
          {/* <Route path="/blog" element={Blog} /> */}
          <Route path='/about' element={<About />} />
          {/* <Route path="/contact" element={Contact} /> */}
          
        </Routes>
      </Router>
      
      
      <div>
        <h1>First Step Country</h1>

        <QuestionLogicForm></QuestionLogicForm>
   
      </div>

    </>
  );
}

export default App
