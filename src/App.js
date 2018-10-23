import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import LightBox from "./LightBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggle() {
    const open = !this.state.open;
    this.setState({ open });
  }
  render() {
    return (
      <div className="App">
        <LightBox open={this.state.open} />
        <button onClick={this.toggle.bind(this)}>TOGGLE</button>
      </div>
    );
  }
}

export default App;
