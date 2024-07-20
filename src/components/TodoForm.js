// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, editTodo, editingIndex, todos = [] }) {  // Ensure todos is always an array
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editingIndex !== null && todos[editingIndex]) {  // Check if todos[editingIndex] exists
      setValue(todos[editingIndex].text);
    }
  }, [editingIndex, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    if (editingIndex !== null) {
      editTodo(editingIndex, value);
    } else {
      addTodo(value);
    }

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="todo-button">
        {editingIndex !== null ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TodoForm;
