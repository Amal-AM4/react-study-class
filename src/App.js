import { useState } from "react";
import CardTitle from "./components/CardTitle";
import MaterialButton from "./components/MaterialButton";

// let firstName = "anaswara"
// console.log(firstName);


// function changeName(name) {
//   firstName = name
//   console.log(firstName);
// }


function App() {

  const [firstName, setFirstName] = useState("anaswara")

  const [age, setAge] = useState(0) 

  return (
    <div className="App">
      <MaterialButton />
      <MaterialButton />

      <CardTitle name={'Amal'} mail={'amal@gmail.com'} />
      <CardTitle name={'Athulya'} mail={'athulya@gmail.com'} />

      {/* {firstName} <button onClick={() => changeName('chippy')}>Change Name</button> */}
      {firstName} <button onClick={() => setFirstName("Apasara")}>Change Name</button> <br />

      {age} <button onClick={() => setAge(age + 1)}>increase the age</button>

    </div>
  );
}

export default App;
