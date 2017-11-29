import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';

export default class App extends React.Component {

	render(){
		return(
			<div>
				<Grid/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));