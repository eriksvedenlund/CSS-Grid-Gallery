import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';

export default class App extends React.Component {

	fetchPhotos = () => {
		//Make get request

		fetch('https://pixabay.com/api/?key=7218190-f36bf2d395f9f4e25477f5282&q=christmas&image_type=photo&per_page=6')
			.then((res) => res.json())
			.then( (res) => console.log(res))
			.catch( (err) => console.log(err))
	}

	render() {
		return (

			<div>
				{this.fetchPhotos()}

				<Grid/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));