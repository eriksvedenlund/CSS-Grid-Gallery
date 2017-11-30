import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/grid";
import Picture from "./components/picture";

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
      "https://pixabay.com/api/?key=3543569-dc23314ee3d8dc6fc0b6f3899&q=yellow+flowers&image_type=photo";

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
    return (
      <div className="container">
        {this.state.images.map((image, index) => {
          return <Picture image={image} id={index} />;
          console.log(image);
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
