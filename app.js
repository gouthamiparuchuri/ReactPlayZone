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