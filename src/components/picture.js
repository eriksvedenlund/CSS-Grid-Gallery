import React from "react";
//import "../sass/grid.scss";

const Picture = props => {
  let id = props.id;
  console.log(props.image.webformatURL
  );
  return (
    <div key={id}>
      <img src={props.image.webformatURL} alt="dddd" />
    </div>
  );
};

export default Picture;
