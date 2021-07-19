import React from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <center>
        <h2>Todo</h2>
        <Form/>
        <TodoList/>
      </center>
    </>
  );
}

export default App;