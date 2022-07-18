import * as React from "react";
import "./index.css";
import { getBackground } from "../../utils/background/apicall";
import Quote from "../quotes";
import Weather from "../weather";
import Todos from "../todo";
import BookmarksList from "../bookmark";
import SearchBar from "../search";

function Base() {
  const defaultImage = "";

  const [backgroundImage, setBackgroundImage] = React.useState(defaultImage);
  const [vision, setVision] = React.useState(
    localStorage.getItem("vision") ? localStorage.getItem("vision") || "{}" : []
  );

  React.useEffect(async () => {
    const response = await getBackground();
    setBackgroundImage(response.urls.full);
  }, []);

  const handleChange = (e) => {
    setVision(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("vision", vision);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg"
    >
      <div className="central-container">
        <div className="time">
          {new Date().getHours() % 10 == new Date().getHours()
            ? "0" + new Date().getHours()
            : new Date().getHours()}
          :
          {new Date().getMinutes() % 10 == new Date().getMinutes()
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes()}
        </div>
        <div className="date">
          {new Date().getDate()}/
          {new Date().getMonth() % 10 == new Date().getMonth()
            ? "0" + new Date().getMonth()
            : new Date().getMonth()}
          /{new Date().getFullYear()}
        </div>
        <div>
          <h1>Your Short Term Goals</h1>
          <div className="goal-section">
            <input
              className="input"
              placeholder="enter your goal here"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div
              onClick={() => {
                handleSubmit();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 submit-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
          <center>
            <div style={{ marginTop: "5%", fontSize: "xx-large" }}>
              {vision}
            </div>
          </center>
        </div>
      </div>

      <div>
        <Weather />
      </div>
      <div>
        <Quote />
      </div>

      <div>
        <Todos />
      </div>
      <div>
        <BookmarksList />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Base;
