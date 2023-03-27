import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";

export default function App() {

  const [name, setName] = useState(''); 
  const renderCount = useRef(0); 
  const inputRef = useRef(); 
  // { current : 0 } --> useRef returns this kind of response

  function focus() {
    inputRef.current.focus(); 
  }

  useEffect(() => { 
    renderCount.current = renderCount.current + 1; 
  })

  return(
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <div className=""> My name is {name} </div>
    <button onClick={ focus }>Focus</button>
    </>
  )
}