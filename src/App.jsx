import React from 'react';

import Todo from './Todo';
import './App.css'
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';


function App() {

  const actors = ['raj', 'bappa raj', 'alomgir', 'sabina'] 
  const singers = [
    {id:1, name:'ashif',age:25},
    {id:2, name:'akis',age:27},
    {id:3, name:'rahul',age:24},
    {id:4, name:'joy',age:26}
  ]

  const books = [
    {id:1,name:'physics',price:300},
    {id:2,name:'Math',price:250},
    {id:3,name:'biology',price:205}
  ]
  
  const time = 50;
  
  return (
    
    <div className='container'>
      <h1>Vite + React</h1>
      
      <Library books={books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      
      <Todo tusk="learn react" isDone={true} time={time}></Todo>
      <Todo tusk="learn javaScript" isDone={false}></Todo>
      <Todo tusk="shower ok" isDone={true} time={time}></Todo>
    </div>
  )
}







export default App
