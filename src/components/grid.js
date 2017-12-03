import React from "react";

const Grid = (props) => {
	if(props.images.length === 0) {
		return (
			<div className="container">
				<h2 className="error">No images found</h2>
			</div>
		);
	}
	else {
		return (
			<div className="container">
				<div className="wrapper">
					{props.images}
				</div>
			</div>
		);
	}
};

export default Grid;
