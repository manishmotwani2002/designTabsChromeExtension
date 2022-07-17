import React, { useState } from "react";
import BookMark from "./BookMark";
import BookMarkForm from "./BookMarkForm";
import "./index.css";

function BookmarksList() {
  const [bookmarks, setBookmarks] = useState(
    localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks") || "{}")
      : []
  );

  const addBookmark = (bookmark) => {
    let newBookmarks;
    if (localStorage.getItem("bookmarks")) {
      newBookmarks = [
        bookmark,
        ...JSON.parse(localStorage.getItem("bookmarks") || "{}"),
      ];
    } else newBookmarks = [bookmark, ...bookmarks];

    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const updateBookmark = (bookmarkId, newValue) => {
    let temporaryBookmark = bookmarks;
    temporaryBookmark.map((item, index) => {
      if (item.id === bookmarkId) {
        item.text = newValue.text;
      }
    });
    setBookmarks((prev) =>
      prev.map((item) => (item.id === bookmarkId ? newValue : item))
    );
    localStorage.setItem("bookmarks", JSON.stringify(temporaryBookmark));
  };

  const removeBookmark = (id) => {
    const removedArr = [...bookmarks].filter((bookmark) => bookmark.id !== id);

    setBookmarks(removedArr);
    localStorage.setItem("bookmarks", JSON.stringify(removedArr));
  };

  return (
    <div className="bookmark_container">
      <h1>Your Bookmarks</h1>
      <BookMarkForm onSubmit={addBookmark} />
      <BookMark
        bookmarks={bookmarks}
        removeBookmark={removeBookmark}
        updateBookmark={updateBookmark}
      />
    </div>
  );
}

export default BookmarksList;
