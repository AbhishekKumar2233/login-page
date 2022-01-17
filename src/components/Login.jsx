import React from "react";
import Inputfield from "./Inputfield";

export default function Login(props) {
  return (
    <form className="form">
      <h1>{props.title}</h1>
      <Inputfield type="text" placeholder="User Id" />
      <Inputfield type="Password" placeholder="Password" />

      <button type="submit">{props.btn1}</button>
    </form>
  );
}
