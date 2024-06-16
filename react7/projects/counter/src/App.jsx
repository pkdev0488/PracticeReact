import { useState } from "react";
import "./App.css";
function App(){
  const [c, setCount]=useState(0)
  // c is value or a variable and setCount is a function
  //let c = 0;
  function add(){
    //c++;
    setCount(c+1);
    console.log(c);
  }
  /*function minus(){
    setCount(c-1);
  }*/
  return(
    <div className="counter">
      <p>Count: {c}</p>
      <div>
        <button onClick={add}>+</button>
        <button onClick={()=>setCount(c-1)}>-</button>
      </div>
    </div>
  )
}
export default App