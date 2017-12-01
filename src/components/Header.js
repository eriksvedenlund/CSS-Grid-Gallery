import React from "react";

const Header = props => (
  <header>
    <h1>CSS Grid Gallery</h1>
    <input type="text" onChange={props.changes} placeholder="Search for images"/>
    <a href="https://github.com/eriksvedenlund/workflow-project/"><img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_1280.png" /></a>
  </header>
);

export default Header;
