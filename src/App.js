import { useState } from "react";
import './App.scss'


function App() {

  const [showHeader, setShowHeader] = useState(false)

  const [name, setName] = useState('')
  const [listOfNames, setListOfNames] = useState([])

  function toggle() {
    if (showHeader === true) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
  }

  return (
    <div className="App">
      
    <button onClick={toggle}>Change Show</button>
    {showHeader ? <h1>Hello</h1> : <h1>NO Hello</h1>}

    <input type="text" onChange={(e) => setName(e.target.value)} />
    <button onClick={() => {
      setListOfNames([...listOfNames, name])
      setName("")
      console.log(listOfNames);
      
    }}>Add Name</button>


    {listOfNames.map((name, key) => {
      return <h1 key={key}>{name}</h1>
    })}

    </div>
  );
}

export default App;
