import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./todo.css";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [todoList, setTodoList] = React.useState(todos);

  React.useEffect(() => {
    const preloadTodos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "{}")
      : [];
    setTodoList(preloadTodos);
  }, [todos]);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todoList.map((todo, index) => (
    <div key={index} className="todo_item">
      <div key={todo.id}>{todo.text}</div>
      <div>
        <button className="btn" onClick={() => removeTodo(todo.id)}>
          Remove
        </button>

        <button
          className="btn"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
