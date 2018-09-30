import React, { Component } from "react"

class Square extends Component {
  _click = event => {
    // this.props._playerLeftClick(this.props.position)
  }

  _rightClick = event => {
    // this.props._playerRightClick(this.props.position)
  }

  render() {
    return (
      <td onContextMenu={this._rightClick} onClick={this._click}>
        {this.props.value}
      </td>
    )
  }
}

export default Square
