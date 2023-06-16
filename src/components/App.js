
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
        <Parent/>
        <h3>Child Component</h3>
        <Child/>
    </div>
  )
}

export default App
