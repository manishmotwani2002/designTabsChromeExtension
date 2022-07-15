import React from "react";

function BookMarkForm(props) {
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
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a bookmark"
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add Bookmark</button>
        </>
      )}
    </form>
  );
}
export default BookMarkForm;
