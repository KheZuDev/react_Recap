'use client';
import { useState } from 'react';

function nextId() {
  let id = 3;
  return function () {
    return id++;
  };
}
const uniqueId = nextId();
export default function ToDoListUI() {
  const [newToDo, setNewToDo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
    },
    {
      id: 2,
      text: 'Todo 2',
    },
  ]);
  const addToDoHandler = () => {
    console.log('AddToDo Item ', newToDo);
    let id = uniqueId();
    const newTodo = {
      id,
      text: newToDo,
    };
    setTodos([...todos, newTodo]);
    setNewToDo('');
  };
  return (
    <div>
      <div>
        <form>
          <input
            type={'text'}
            value={newToDo}
            onChange={(event) => setNewToDo(event.target.value)}
          />
          <button type={'button'} onClick={addToDoHandler}>
            Add
          </button>
        </form>
      </div>
      {todos.map((todo) => (
        <div className=" m-3 border-b-gray-200" key={todo.id}>
          {todo.text}
        </div>
      ))}
    </div>
  );
}
