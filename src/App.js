import React, { Component } from "react"
import "./App.css"
import Square from "./Square"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
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
      mines: 9
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

  _sampleGame = event => {
    axios
      .get("https://minesweeper-api.herokuapp.com/games/3")
      .then(response => {
        this.setState(response.data)
      })
  }

  _playerLeftClick = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games/{id}/check", {
        id: 1,
        row: 1,
        col: 1
      })
      .then(response => {
        this.setState(response.data)
      })
  }

  _playerRightClick = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games/{id}/flag", {
        id: 1,
        row: 1,
        col: 1
      })
      .then(response => {
        this.setState(response.data)
      })
    event.preventDefault()
  }

  render() {
    let rowOne = this.state.board[0].map((square, index) => {
      return <Square position={index} value={square} />
    })

    let rowTwo = this.state.board[1].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowThree = this.state.board[2].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowFour = this.state.board[3].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowFive = this.state.board[4].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowSix = this.state.board[5].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowSeven = this.state.board[6].map((square, index) => {
      return <Square position={index} value={square} />
    })
    let rowEight = this.state.board[7].map((square, index) => {
      return <Square position={index} value={square} />
    })

    return (
      <div className="main">
        <header>
          <h1>Minesweeper</h1>
        </header>

        <div className="diff-select">
          <button onClick={this._easyGame}>Easy</button>
          <button onClick={this._mediumGame}>Medium</button>
          <button onClick={this._hardGame}>Hard</button>
        </div>

        <main>
          <h2>
            <span>010</span>
            <button className="new-game" onClick={this._sampleGame} />
            <span>000</span>
          </h2>

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
