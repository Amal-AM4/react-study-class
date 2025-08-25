// import { useEffect, useRef, useState } from "react";
import './App.scss'
// import Task from "./components/Task";

function App() {


  return (
    <div className="App">

      <form>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" placeholder="First Name" /> <br />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" placeholder="Last Name" /> <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Example@email.com" /> <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" placeholder="Password" /> <br />
        <input type="submit"/> 
      </form>

    </div>
  );
}

export default App;
