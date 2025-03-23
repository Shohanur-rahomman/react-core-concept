import React from 'react';

import Todo from './Todo';
import './App.css'

function App() {


  return (
    
    <div className='container'>
      
      <h1>Vite + React</h1>
      
      <Todo tusk="learn react" isDone={true}></Todo>
      <Todo tusk="learn javaScript" isDone={false}></Todo>
      <Todo tusk="shower ok" isDone={true}></Todo>
    </div>
  )
}







export default App
