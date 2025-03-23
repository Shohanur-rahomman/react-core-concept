import React from 'react';

import Todo from './Todo';
import './App.css'

function App() {
  
  const time = 50;
  
  return (
    
    <div className='container'>
      
      <h1>Vite + React</h1>
      
      <Todo tusk="learn react" isDone={true} time={time}></Todo>
      <Todo tusk="learn javaScript" isDone={false}></Todo>
      <Todo tusk="shower ok" isDone={true} time={time}></Todo>
    </div>
  )
}







export default App
