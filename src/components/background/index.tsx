import * as React from "react";
import "./index.css";

import { getBackground } from "../../utils/background/apicall";
import Quote from "../quotes";
import Weather from "../weather";
import Todos from "../todo";

function Base() {
  const defaultImage = "";

  const [backgroundImage, setBackgroundImage] = React.useState(defaultImage);

  React.useEffect(async () => {
    const response = await getBackground();
    setBackgroundImage(response.urls.full);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="bg"
      >
        <div>
          <Quote />
        </div>
        <div>
          <Weather />
        </div>
        <div>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default Base;
