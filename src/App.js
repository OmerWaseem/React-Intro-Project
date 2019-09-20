import React from "react";
import Tweet from "./Tweet"
function App() {

  
  return (
    <div className="app">
      <Tweet name="Omer" message="Hello! This is Omer" />
      <Tweet name = "Osama" message="Hello! This is Osama"/>
      <Tweet name = "Alveera" message="Hello! This is Alveera"/>
      <Tweet name = "Shaheera" message="Hello! This is Shaheera"/>
    </div>
  )
}

export default App;