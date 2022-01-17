import "./styles.css";
import React from "react";
import Login from "./components/Login";

//
var userisRegistered = false;

//first way
// var isLoggedIn;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello User</h1>;
//   } else {
//     return <Login title="Login User" btn1="Login" />;
//   }
// }

export default function App() {
  return (
    <div className="App">
      {
        // //it is an expression not statement like loops
        // isLoggedIn === true ? (
        //   <h1>Hello</h1>
        // ) : (
        //   <Login title="Login User" btn1="Login" />
        // )

        //using && and op in react fisrt expression is true then run otherwise not
        (isLoggedIn = true && <Login isRegistered={userisRegistered} />)
      }
    </div>
  );
}
