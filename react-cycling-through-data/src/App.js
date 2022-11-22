import './App.css';
import { useState } from 'react';
import State from './Component/state';

function App() {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to Sathiyam Cinimas");

  setTimeout(()=>{
    setMessage("Enjoy Your Snacks")
  },3000);


  return (
    <div className="App">
      <h2>Function Component</h2>
      <h1>{ message }</h1>
      <h2>{count} times clicked</h2>
      <button onClick={()=> setCount(count+1)}>Click</button>
      <hr/>
      <State/> 
    </div>
  );
}

export default App;
