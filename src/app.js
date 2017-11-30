import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/grid";
import Header from "./components/Header";
import './sass/index.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
			searchQuery: "christmas",
    };
  }

  componentDidMount() {
    //Make get request
    const url =
      "https://pixabay.com/api/?key=7218190-f36bf2d395f9f4e25477f5282&q=" + this.state.searchQuery + "&image_type=photo&per_page=6";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState({
          images: data.hits
        });
      });
  }

  render() {
  	let images = this.state.images.map((image, index) => {
  		const style = {
			backgroundImage:`url('${image.webformatURL}')`
  		}
  		return(
  			<div key={index} className={"box" + index } style={style}>
  			</div>
  		);
  	});
    return (
      <div>
				<Header/>
        <Grid images={images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
