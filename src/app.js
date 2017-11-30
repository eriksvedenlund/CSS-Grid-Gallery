import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/grid";
import Picture from "./components/picture";
// import './sass/grid.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    //Make get request
    const url =
      "https://pixabay.com/api/?key=7218190-f36bf2d395f9f4e25477f5282&q=christmas&image_type=photo&per_page=6";

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
  		return(
  			<div key={index} className={"box" + index }>
  				<img src={image.webformatURL} alt="dddd" />
  			</div>
  		);
  	});
    return (
      <div className="container">
        <Grid images={images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
