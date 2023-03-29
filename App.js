import React from "react";
import ReactDOM from "react-dom";

const Heading = () => (
  <h1>This is the first component</h1>
);

const Body = () => {

  return <div>
    <Heading/>
    <h2>This is the second component</h2>
  </div>
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);
