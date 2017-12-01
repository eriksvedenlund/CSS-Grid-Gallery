import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import 'core-js/fn/promise';
import Grid from "./components/grid";
import Header from "./components/Header";
import "./sass/index.scss";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: []
		};
	}

	changeName = evt => {
		let searchQuery = evt.target.value;
		this.fetchImages(searchQuery);
	};

	fetchImages = searchQuery => {
		const url =
			"https://pixabay.com/api/?key=7218190-f36bf2d395f9f4e25477f5282&q=" +
			searchQuery +
			"&image_type=photo&per_page=6";

		axios.get(url)
			.then(res => {
				this.setState({
					images: res.data.hits
				});
			})
		.catch(err => console.error(err))
	};

	componentDidMount() {
		const url =
			"https://pixabay.com/api/?key=7218190-f36bf2d395f9f4e25477f5282&q=" +
			"" +
			"&image_type=photo&per_page=6";

		axios.get(url)
			.then(res => {
				this.setState({
					images: res.data.hits
				});
			})
		.catch(err => console.error(err))
	}

	render() {
		let images = this.state.images.map((image, index) => {
			const style = {
				backgroundImage: `url('${image.webformatURL}')`
			};
			return <div key={index} className={"box" + index} style={style}/>;
		});
		return (
			<div>
				<Header
					changes={this.changeName.bind(this)}
				/>
				<Grid images={images}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
