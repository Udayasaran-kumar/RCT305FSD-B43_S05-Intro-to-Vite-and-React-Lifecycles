import { useState,useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{
   fetch();
  },[])
  async function fetch() {
    try {
      setError(null);
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
       const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <h2>Random Joke</h2>       
        <div>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>     
      <button onClick={fetch} >Get Another Joke</button>
      
    </>
  )
}

export default App
