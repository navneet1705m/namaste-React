import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello React!!"),
//     React.createElement("h2", {}, "Hello React!!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello React!!"),
//     React.createElement("h2", {}, "Hello React!!"),
//   ]),
// ]);
const Title = () => (
  <div className="div">
    <h1 className="heading">Hello World!!</h1>
  </div>
);

const JsxHeading = () => (
  <div className="container">
    <Title />
    <h1 className="heading">Namaste React from JSX</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading/>);
