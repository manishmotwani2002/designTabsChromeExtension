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
        <span onClick={() => removeTodo(todo.id)}>
          <svg
            style={{ height: "30px", width: "30px", padding: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </span>

        <span onClick={() => setEdit({ id: todo.id, value: todo.text })}>
          <svg
            style={{ height: "30px", width: "30px", padding: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </span>
      </div>
    </div>
  ));
};

export default Todo;
