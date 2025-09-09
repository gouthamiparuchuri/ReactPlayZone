import React from "react";
import ReactDOM from "react-dom/client";


//React
var heading = React.createElement("h1", { key: "h1Header", "hello": "world" }, "Hello World from React!");
var root = ReactDOM.createRoot(document.getElementById("reactHello"));
root.render(heading);


var nestedElement = React.createElement("div", { key: "mainDiv" }, [
    React.createElement("div", { key: "nestedDiv1" },
        React.createElement("h1", { key: "header1" }, "Nested header1")
    ),
    React.createElement("div", { key: "nestedDiv2" },
        React.createElement("h1", { key: "header2" }, "Nested header2")
    )
])
ReactDOM.createRoot(document.getElementById("nestedDiv")).render(nestedElement);

//JSX
//React ELement
var headingJSX = (
    <div>
        <div>Hello From JSX React ELement</div>
        <div>
            <h1 key="h1Header" className="jsxHeaderDiv" hello="world">Hello World from JSX!</h1>
        </div>
    </div>
);

ReactDOM.createRoot(document.getElementById("jsxDiv")).render(headingJSX);


//React Component
// a) functional components(new)

// b) class based



