import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'



function App() {

  const returnRandomAnimal = () => {
    const animalArray = ["cat", "cow", "dog", "horse", "bird", "gator"];
    let animalAtIndex = Math.round(Math.random() * (animalArray.length - 1))
    console.log(animalArray[animalAtIndex]);
    return animalArray[animalAtIndex];

  }

  const [animal, setAnimal] = useState([])
  const handleClick = () => {
    setAnimal([...animal, returnRandomAnimal()])
  }

  const renderedAnimal = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <button className="button-container" onClick={handleClick}>Add animals</button>
      <div className="animal-list" >{renderedAnimal} </div>
    </div>
  );


  /* 
  
    //array destructuring
    function makeArray() {
      return [14, 25, 33, 49];
    }
  
    const [one, two] = makeArray()
    console.log(one, two)
  
    const [count, setCount] = useState(0);
    // console.log(useState(1));
  
    const handleClick = () => {
      console.log("Animal clicled");
      setCount(count + 1);
      //setCount("hello")
    } */


}

export default App;
