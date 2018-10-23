import React, { Component } from "react";

class LightBox extends Component {
  componentDidUpdate(prevProps) {
    console.log("PREVIOUS:", prevProps);
    console.log("CURRENT:", this.props);
  }

  render() {
    return <div>{this.props.open ? "OPEN" : "CLOSED"}</div>;
  }
}

export default LightBox;
