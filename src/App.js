// import { useEffect, useRef, useState } from "react";
import './App.scss'
import { Button } from './components/Buttons';


function App() {


  return (
    <div className="App">

    <Button color={"blue"} darkColor={"darkblue"} large>Large Button</Button>
    <Button color={"green"} darkColor={"darkgreen"}>Small Button</Button>

    </div>
  );
}

export default App;
