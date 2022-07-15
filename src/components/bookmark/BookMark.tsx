import React from "react";
import BookMarkForm from "./BookMarkForm";

const BookMark = ({ todos, removeTodo, updateTodo }) => {
  const [bookmarkList, setBookmarkList] = React.useState(todos);

  React.useEffect(() => {
    const preloadBookmarks = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks") || "{}")
      : [];
    console.log("preloadbookmarks", preloadBookmarks);
    setBookmarkList(preloadBookmarks);
  }, [todos]);

  const [edit, setEdit] = React.useState({
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
    return <BookMarkForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bookmarkList.map((todo, index) => (
    <div key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div>
        <button onClick={() => removeTodo(todo.id)}>Remove Todo</button>

        <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
          Edit
        </button>
      </div>
    </div>
  ));
};

export default BookMark;
