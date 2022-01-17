import React from "react";
import Inputfield from "./Inputfield";

export default function Login(props) {
  return (
    <form className="form">
      <h1>{props.isRegistered ? "Login User" : "Register Now"}</h1>
      <Inputfield type="text" placeholder="User Id" />
      <Inputfield type="Password" placeholder="Password" />
      {!props.isRegistered && (
        <Inputfield type="Password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}
