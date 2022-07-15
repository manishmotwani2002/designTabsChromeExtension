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
        <div>Current Time</div>
        <div>Current Date</div>
        <div>
          <h1>Your Short Term Goals</h1>
          <input type="text" placeholder="enter your goal here" />
        </div>
      </div>

      <div>
        <BookmarksList />
      </div>
      {/* <div>
          <Quote />
        </div>
        <div>
          <Weather />
        </div>
        <div>
          <Todos />
        </div> */}
    </div>
  );
}

export default Base;
