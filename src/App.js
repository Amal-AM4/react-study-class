import { useEffect, useState } from "react";
import './App.scss'


function App() {

  const [Number, stateName] = useState(0)

  useEffect(() => {
    console.log('page render');
  }, [Number])

  return (
    <div className="App" style={{fontSize: 30}}>
      <p>{Number} <br /> <button onClick={() => stateName(Number + 1)}>Increase number</button> </p>
    </div>
  );
}

export default App;
