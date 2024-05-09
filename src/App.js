import './App.css';
import './index.css';
import Greetings from './Greetings';
import Calculator from './Calculator';
import FormComponent from './FormComponent';
import { useState } from 'react';
import ToDoListComponent from './ToDoListComponent';


function App() {

  // const [sum, setSum] = useState(0)
  // function handleAdd(value) {
  //   console.log("valeu", value);
  //   setSum(sum + value)
  // }
  // function handleSub(value) {
  //   setSum(sum - value)
  // }
  // return (
  //   <>
  //     <h1>{sum}</h1>
  //     <button onClick={() => handleAdd(1)}>Add</button>
  //     <button onClick={() => handleSub(1)}>Sub</button>
  //   </>
  // )

  // return <Greetings/>;
  // return <Calculator/>;
  // return <FormComponent/>;
  return <ToDoListComponent/>;
}

export default App;
