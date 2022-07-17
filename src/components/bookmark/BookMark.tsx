import React from "react";
import BookMarkForm from "./BookMarkForm";
import "./index.css";

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
    <div key={index} className="bookmark_item">
      <div key={bookmark.id}>
        <a href={`https://${bookmark.text}`}>
          <img
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${bookmark.text}`}
            alt="Bookmark"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
      <div>
        <button onClick={() => removeBookmark(bookmark.id)}>Remove</button>

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
