import React from "react";
import { render } from "react-dom";
import App from "./app";

// Hidden Values
// console.log(process.env.SECRET_VARIABLE);

let target = document.querySelector("#app");

render(<App />, target);
