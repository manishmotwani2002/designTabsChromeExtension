import * as React from "react";
import "./index.css";
import { getBackground } from "../../utils/background/apicall";
import Quote from "../quotes";
import Weather from "../weather";
import Todos from "../todo";
import BookmarksList from "../bookmark";

function Base() {
  const defaultImage = "";

  const [backgroundImage, setBackgroundImage] = React.useState(defaultImage);

  React.useEffect(async () => {
    const response = await getBackground();
    setBackgroundImage(response.urls.full);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg"
    >
      <div className="central-container">
        <div className="time">
          {new Date().getHours()}:{new Date().getMinutes()}
        </div>
        <div className="date">
          Date: {new Date().getDate()}/{new Date().getMonth()}/
          {new Date().getFullYear()}
        </div>
        <div>
          <h1>Your Short Term Goals</h1>
          <div className="goal-section">
            <input className="goal-input" placeholder="enter your goal here" />
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
    </div>
  );
}

export default Base;
