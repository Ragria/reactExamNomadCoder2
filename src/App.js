import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "./App.module.css"


function App() {
  const [counter, setValue] = useState(0) 
  const [keyword, setKeyword] = useState("")
  const onClick = () =>  setValue((prev) => prev + 1)
  const onChange = (e) => {setKeyword(e.target.value)}
  useEffect(() => {
    console.log("11")
  }, []);
  useEffect(() => {
    console.log("22")
  }, [counter]);
  useEffect(() => {
    console.log("33")
  }, [keyword]);
  useEffect(() => {
    console.log("4")
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
