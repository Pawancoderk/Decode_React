import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const plus = (e)=>{
    e.preventDefault();
    setCount(count+1);
  }
  const minus = (e)=>{
    e.preventDefault();
    setCount(count-1);
  }

  const reset = (e)=>{
    e.preventDefault();
    setCount(0)
  }

 


  return (
    <>
      <div className='card'>
        <h1>Count : {count}</h1>
       <button onClick={plus} style={{backgroundColor:"green"}}>Increase</button>
       <button onClick={reset} style={{backgroundColor:"grey"}}>Reset</button>
       <button onClick={minus} style={{backgroundColor:"red"}}>Decrease</button>
      </div>
    </>
  )
}

export default App
