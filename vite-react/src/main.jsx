import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Load from "./load.jsx";

function CustomLoad() {
  return <h1>this is CustomLoad</h1>;
}

const CustomElement = (
  <a target="_blank" href="https://google.com">
    Visit gooogle
  </a>
);

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
const anotherUser = "my react user";
const reactCustomElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit GOOGLE",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // CustomElement
  // reactElement
  // reactCustomElement
  // <React.StrictMode>
  //   <Load />
  //   <CustomLoad />
  // </React.StrictMode>
);
