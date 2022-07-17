import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./todo.css";

function TodoList() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "{}")
      : []
  );

  const addTodo = (todo) => {
    let newTodos;

    if (localStorage.getItem("todos")) {
      newTodos = [todo, ...JSON.parse(localStorage.getItem("todos") || "{}")];
    } else newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (todoId, newValue) => {
    let temporaryTodo = todos;
    temporaryTodo.map((item, index) => {
      if (item.id === todoId) {
        item.text = newValue.text;
      }
    });
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    localStorage.setItem("todos", JSON.stringify(temporaryTodo));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    localStorage.setItem("todos", JSON.stringify(removedArr));
  };

  return (
    <div className="todo-container">
      <h1>Your Todos</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
