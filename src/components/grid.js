import React from "react";

const Grid = (props) => {
	return (
		<div className="container">
			<div className="wrapper">
				{props.images}
			</div>
		</div>
	);
};

export default Grid;
