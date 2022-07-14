import * as React from "react";
import "./index.css";

import { getBackground } from "../../utils/background/apicall";

function Base() {
  const defaultImage = "";

  const [backgroundImage, setBackgroundImage] = React.useState(defaultImage);

  React.useEffect(async () => {
    const response = await getBackground();
    console.log(response.urls.full);
    setBackgroundImage(response.urls.full);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="bg"
      ></div>
    </div>
  );
}

export default Base;
