import NavBar from './NavBar';
import QuestionLogicForm from './QuestionLogicForm';
import './App.css';

function App() {
  // might need hook useState here
  //const [count, setCount] = useState(0)

  return (
    <>
    {/* <NavBar></NavBar> */}
      <div>
        <h1>First Step Country</h1>

        <QuestionLogicForm></QuestionLogicForm>
      </div>

    </>
  );
}

export default App
