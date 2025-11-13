import { useState } from "react";

function Greet({name}){
  return <h1>I'm {name || "baby gurl"}</h1>
  
}


function App() {


  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // UI
  return (
    <div style={{ textAlign: "center" , marginTop: "50px"}} >
      <h1> Yo, be nice, this is my first</h1> 

      <Greet name={name}/> 

      {/* put yo name here */}
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value= {name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>


      <p>Count rn is: {count}</p>  

      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(0)}>Reset</button>  



    </div>
  );
}

export default App;