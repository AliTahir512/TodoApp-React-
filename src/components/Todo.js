// src/components/Todo.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false }]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditingIndex(null); // Reset editing index after edit
  };

  return (
    <div className="todo">
      <h2>To-Do List</h2>
      <TodoForm addTodo={addTodo} editTodo={editTodo} editingIndex={editingIndex} todos={todos} />
      <TodoList 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        editTodo={editTodo} 
        setEditingIndex={setEditingIndex}
      />
    </div>
  );
}

export default Todo;
