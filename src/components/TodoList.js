// src/components/TodoList.js
import React from 'react';
import './TodoList.css';

function TodoList({ todos, completeTodo, removeTodo, setEditingIndex }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <span
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            onClick={() => completeTodo(index)}
          >
            {todo.text}
          </span>
          <div>
            <button onClick={() => setEditingIndex(index)} className="edit-button">Edit</button>
            <button onClick={() => completeTodo(index)} className="done-button">Done</button>
            <button onClick={() => removeTodo(index)} className="remove-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
