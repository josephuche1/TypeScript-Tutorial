import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import {Todo} from "./model"

let name = "joseph";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);
  

  const handleAdd= (e: React.FormEvent):void => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, done: false}]);
      setTodo('');
    }
    
  }
  console.log(todos);
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField 
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default App;
