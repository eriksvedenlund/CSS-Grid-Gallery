import React from "react";

const Header = props => (
  <header>
    <h1>CSS Grid Gallery</h1>
    <input type="text" onChange={props.changes} value={props.UserInput} />
  </header>
);

export default Header;
