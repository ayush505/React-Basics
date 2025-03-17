
const parent = React.createElement("div", { id: 'parent' }, React.createElement("div", { id: 'chid' },[ React.createElement("h1", { id: 'h1' }, "Hello from React file!"), React.createElement("h1", { id: 'h1' }, "Hello from React file 2 ")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
