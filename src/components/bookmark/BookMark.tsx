import React from "react";
import BookMarkForm from "./BookMarkForm";

const BookMark = ({ bookmarks, removeBookmark, updateBookmark }) => {
  const [bookmarkList, setBookmarkList] = React.useState(bookmarks);

  React.useEffect(() => {
    const preloadBookmarks = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks") || "{}")
      : [];
    setBookmarkList(preloadBookmarks);
  }, [bookmarks]);

  const [edit, setEdit] = React.useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateBookmark(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <BookMarkForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bookmarkList.map((bookmark, index) => (
    <div key={index}>
      <div key={bookmark.id}>{bookmark.text}</div>
      <div>
        <button onClick={() => removeBookmark(bookmark.id)}>
          Remove Tobookmarkdo
        </button>

        <button
          onClick={() => setEdit({ id: bookmark.id, value: bookmark.text })}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

export default BookMark;
