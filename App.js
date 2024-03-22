const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello React!!"),
    React.createElement("h2", {}, "Hello React!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello React!!"),
    React.createElement("h2", {}, "Hello React!!"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "Hello React!!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
