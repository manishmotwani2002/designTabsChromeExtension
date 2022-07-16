import React from "react";
import "./todo.css";

function TodoForm(props) {
  const [input, setInput] = React.useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {props.edit ? (
        <div style={{ display: "flex" }}>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            className="todo-input"
          />

          <div onClick={handleSubmit} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
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
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            className="todo-input"
          />
          <div onClick={handleSubmit} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
