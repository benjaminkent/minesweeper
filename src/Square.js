import React, { Component } from "react"

class Square extends Component {
  _click = event => {
    this.props.handleCheck(this.props.row, this.props.column)
  }

  _rightClick = event => {
    this.props.handleFlag(this.props.row, this.props.column)
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
