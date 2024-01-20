import React from "react";
import ReactDOM from "react-dom";

export default function HelloWorld() {
    return <h1>Hello World</h1>;
}

if (document.getElementById("hello-world")) {
    ReactDOM.render(<HelloWorld />, document.getElementById("hello-world"));
}
