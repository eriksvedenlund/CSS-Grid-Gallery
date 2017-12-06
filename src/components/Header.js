import React from "react";
import logo from './images/github.png';

const Header = props => (
  <header>
    <h1>CSS Grid Gallery</h1>
    <input type="text" onChange={props.changes} placeholder="Search for images"/>
    <a href="https://github.com/eriksvedenlund/workflow-project/"><img src={logo} /></a>
  </header>
);

export default Header;
