import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{

  },[count])

  return (
    <>
    <h2>{count}</h2>
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> 
    </>
  )
}

export default App
