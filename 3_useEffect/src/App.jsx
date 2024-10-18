import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [toogle, setToogle] = useState(true)
  return (
    <>
    <button onClick={()=>setToogle(!toogle)}>Switch</button>
      {toogle ? <Counter/> : ""}
    </>
  )
}

export default App
