import React from "react";

export default function Inputfield(input) {
  return (
    <form className="form">
      <input type={input.type} placeholder={input.placeholder} />
    </form>
  );
}
