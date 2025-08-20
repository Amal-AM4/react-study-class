import { useEffect, useRef, useState } from "react";
import './App.scss'


function App() {


  const testInput = useRef(null)

  const [testValue, testState] = useState('')

  const changePlaceHolder = () => {
    testInput.current.placeholder = "youtube"
    testInput.current.focus()
    console.log(testInput);
    
    testState(testInput.current.value)
  }

  return (
    <div className="App" style={{fontSize: 30}}>
      
      <input type="text" placeholder="whatsapp" ref={testInput} />
      <button onClick={changePlaceHolder}>Change Placeholder</button>

      <h1>{testValue}</h1>

    </div>
  );
}

export default App;
