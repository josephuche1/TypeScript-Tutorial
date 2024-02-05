import React, { useState } from 'react';
import {Todo} from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
   const [edit, setEdit] = useState<boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(todo.todo);


   const handleDone = (id: number | string) => {
      setTodos(todos.map((todo) => todo.id === id ? {
        ...todo,
        done: !todo.done // toggle the done property.
    } : todo))
   };

   const handleDelete = (id: number | string) => {
     setTodos(todos.filter( todo => todo.id !== id))
   }

   const handleEdit = (e: React.FormEvent, id: number | string) => {
    e.preventDefault();
    setTodos(todos.map( (todo) => todo.id === id ?{
      ...todo,
      todo: editTodo
    } : todo));
    setEdit(false);
   }

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input 
            type="text" 
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
          ): todo.done ? (
              <s className="todos__single--text">{todo.todo}</s>
          ) : (
              <span className="todos__single--text">{todo.todo}</span>
          )      
        }
      
      <div>
        <span className="icon" onClick={() => {
                    if(!edit && !todo.done){ // if edit is false and todo is not done
                        setEdit(!edit); // set edit to true
                    }
        }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => {
          handleDelete(todo.id);
        }}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => {
          handleDone(todo.id);
        }}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
