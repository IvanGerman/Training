import React from 'react';
import './App.css';
import Names from './components/Names/Names';
import Greetings from './components/Greetings/Greetings';

let names = [
  {name: "Dimka"},
  {name: "Andruha"},
  {name: "Svetka"}
];

let greetings = [
  {greeting: "Huj!"},
  {greeting: "Hello!"},
  {greeting: "Yo!"}
];

// taking array names and using method map() ,we create a variable allNames consisting out of
// 3 <Names /> components :
let allNames = names.map ( (n, i) =>
    <Names key = {i} name = {n.name} />
);

let allGreetings = greetings.map ( (g, i) =>
    <Greetings key = {i} greeting = {g.greeting} />
);

console.log("allNames = ", allNames," type= ", typeof(allNames));
function App() {
  return (
    <div className = "App">
        <div className = "nr1">
            {allNames}
        </div>
        <div className = "nr2">
          {allGreetings}
        </div> 
        
    </div>
  );
}

export default App;
