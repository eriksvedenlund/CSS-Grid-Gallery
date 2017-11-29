import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';

export default class App extends React.Component {

	fetchPhotos = () => {
		console.log('hej hej')
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