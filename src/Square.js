import React, { Component } from "react"

class Square extends Component {
  state = {
    checkedValues: [
      "*", "@", "_", 1, 2, 3, 4, 5, 6, 7, 8
    ]
  }
  _click = () => {
    this.props.handleCheck(this.props.row, this.props.column)
  }

  _rightClick = event => {
    this.props.handleFlag(this.props.row, this.props.column)
    event.preventDefault()
  }

  render() {
    let output = this.props.value
    if (this.props.value === "*") {
      output = "💣"
    }
    if (this.props.value === "F") {
      output = "🤨"
    }
    if (this.props.value === "@") {
      output = "😁"
    }
    if (this.props.value === "_") {
      output = ""
    }

    let squareClass = "not-checked"
    this.state.checkedValues.forEach(value => {
      if (this.props.value === value) {
        squareClass = "checked"
      }
    })

    return (
      <td
        className={squareClass}
        onContextMenu={this._rightClick}
        onClick={this._click}
      >
        {output}
      </td>
    )
  }
}

export default Square
