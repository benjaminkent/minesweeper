import React, { Component } from "react"
import "./App.css"
import Square from "./Square"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      board: [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "]
      ],
      state: "playing",
      mines: 0
    }
  }

  _easyGame = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 0 })
      .then(response => {
        this.setState(response.data)
      })
  }

  _mediumGame = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 1 })
      .then(response => {
        this.setState(response.data)
      })
  }

  _hardGame = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 2 })
      .then(response => {
        this.setState(response.data)
      })
  }

  // _sampleGame = event => {
  //   axios
  //     .get("https://minesweeper-api.herokuapp.com/games/3")
  //     .then(response => {
  //       this.setState(response.data)
  //     })
  // }

  handleCheck = (row, column) => {
    if (this.state.id === 0) {
      return
    }
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
        { row: row, col: column }
      )
      .then(response => {
        this.setState(response.data)
      })
  }

  handleFlag = (row, column) => {
    if (this.state.id === 0) {
      return
    }
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
        { row: row, col: column }
      )
      .then(response => {
        this.setState(response.data)
      })
  }

  render() {
    //this.state.board.map((row, rowIndex) => {
    //   return (
    //     <tr>with everything in it</tr>
    //   )
    // })

    let gameBoard = this.state.board.map((row, rowIndex) => {})

    let rowOne = this.state.board[0].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={0}
          column={index}
          value={square}
        />
      )
    })

    let rowTwo = this.state.board[1].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={1}
          column={index}
          value={square}
        />
      )
    })
    let rowThree = this.state.board[2].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={2}
          column={index}
          value={square}
        />
      )
    })
    let rowFour = this.state.board[3].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={3}
          column={index}
          value={square}
        />
      )
    })
    let rowFive = this.state.board[4].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={4}
          column={index}
          value={square}
        />
      )
    })
    let rowSix = this.state.board[5].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={5}
          column={index}
          value={square}
        />
      )
    })
    let rowSeven = this.state.board[6].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={6}
          column={index}
          value={square}
        />
      )
    })
    let rowEight = this.state.board[7].map((square, index) => {
      return (
        <Square
          handleFlag={this.handleFlag}
          handleCheck={this.handleCheck}
          row={7}
          column={index}
          value={square}
        />
      )
    })

    return (
      <div className="main">
        <header>
          <h1>Minesweeper</h1>
          <h2>Game #{this.state.id}</h2>
        </header>

        <div className="diff-select">
          <button onClick={this._easyGame}>Easy</button>
          <button onClick={this._mediumGame}>Medium</button>
          <button onClick={this._hardGame}>Hard</button>
        </div>

        <main>
          <h3>
            <span>{this.state.mines}</span>
            <button className="new-game" />
            <span>000</span>
          </h3>

          <table>
            <tbody>
              <tr>{rowOne}</tr>
              <tr>{rowTwo}</tr>
              <tr>{rowThree}</tr>
              <tr>{rowFour}</tr>
              <tr>{rowFive}</tr>
              <tr>{rowSix}</tr>
              <tr>{rowSeven}</tr>
              <tr>{rowEight}</tr>
            </tbody>
          </table>
        </main>
      </div>
    )
  }
}

export default App
