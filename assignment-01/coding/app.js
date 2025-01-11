// print hello world using javaScript

const heading = document.createElement("h1");
heading.innerText = "Hello World From JavaScript";
const container2 = document.querySelector(".container2");
container2.appendChild(heading);

// print hello world using React

const reactElement = React.createElement("h1",{id:"heading"},"Hello World From React");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(reactElement);

// Create nested React Elements

const recatNestedElement = React.createElement(
    "div",
    {id:parent},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
     React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])
    ]
);
const root2 = ReactDOM.createRoot(document.querySelector("#root2"));
root2.render(recatNestedElement);