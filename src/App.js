
import './App.css';
import React from 'react';

function App() {
  let n=19;
  let m=18;
  let obj={nom:"hayat",class:"dev201",N :"9"}
  return (
    <div className="App">
      <h1>hayat</h1>
      <p>age = {n}</p> 
      
      <p>les information = {obj.nom}--{obj.class}--{obj.N}</p>

    </div>
  );
}

export default App;
