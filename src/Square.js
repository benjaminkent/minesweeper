import React, { Component } from "react"

class Square extends Component {
  _click = event => {
    console.log(this.props.position)
  }

  _rightClick = event => {
    console.log(this.props.position)
    event.preventDefault()
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
