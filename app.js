var heading = React.createElement("h1", {id: "h1Header", "hello": "world"}, "Hello World from React!");
var root = ReactDOM.createRoot(document.getElementById("reactHello"));
root.render(heading);


var nestedElement = React.createElement("div", {id: "mainDiv"}, [
                        React.createElement("div", {id: "nestedDiv1"}, 
                            React.createElement("h1", {id:"header1"}, "Nested header1")
                        ),
                        React.createElement("div", {id: "nestedDiv2"}, 
                            React.createElement("h1", {id:"header2"}, "Nested header2")
                        )
                    ])
ReactDOM.createRoot(document.getElementById("nestedDiv")).render(nestedElement);