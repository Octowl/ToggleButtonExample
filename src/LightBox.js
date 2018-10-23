import React, { Component } from 'react'

class LightBox extends Component {
  render() {
    return (
      <div>
        {this.props.open ? "OPEN" : "CLOSED"}
      </div>
    )
  }
}

export default LightBox