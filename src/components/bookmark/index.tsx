import React, { useState } from "react";
import BookMark from "./BookMark";
import BookMarkForm from "./BookMarkForm";

function BookmarksList() {
  const [todos, setTodos] = useState(
    localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks") || "{}")
      : []
  );

  const addTodo = (todo) => {
    let newTodos;
    if (localStorage.getItem("bookmarks")) {
      newTodos = [
        todo,
        ...JSON.parse(localStorage.getItem("bookmarks") || "{}"),
      ];
    } else newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    //WORKING
    localStorage.setItem("bookmarks", JSON.stringify(newTodos));
    console.log(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    console.log("new value for update", newValue);

    let temporaryTodo = todos;
    temporaryTodo.map((item, index) => {
      if (item.id === todoId) {
        item.text = newValue.text;
      }
    });
    // setTodos(temporaryTodo);
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    console.log("updated todo", todos);
    localStorage.setItem("bookmarks", JSON.stringify(temporaryTodo));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    console.log("removedArr", removedArr);
    localStorage.setItem("bookmarks", JSON.stringify(removedArr));
  };

  //   React.useEffect(() => {
  //     const loadBookmarks = localStorage.getItem("bookmarks")
  //       ? JSON.parse(localStorage.getItem("bookmarks") || "{}")
  //       : [];
  //     console.log("loadbookmarks", loadBookmarks);
  //     localStorage.setItem("bookmarks", JSON.stringify(todos));
  //   }, [todos]);

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <BookMarkForm onSubmit={addTodo} />
      <BookMark todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default BookmarksList;
