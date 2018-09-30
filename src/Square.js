import React, { Component } from "react"

class Square extends Component {
  _click = event => {
    // this.props._playerLeftClick(this.props.position)
  }

  render() {
    return <td onClick={this._click}>{this.props.value}</td>
  }
}

export default Square
