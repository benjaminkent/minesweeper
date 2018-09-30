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
        console.log(response.data)
      })
  }

  _mediumGame = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 1 })
      .then(response => {
        console.log(response.data)
      })
  }

  _hardGame = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 2 })
      .then(response => {
        console.log(response.data)
      })
  }

  _sampleGame = event => {
    axios
      .get("https://minesweeper-api.herokuapp.com/games/3")
      .then(response => {
        this.setState(response.data)
        console.log(response.data)
      })
  }

  render() {
    // let rowOne = this.state.board[0].map(square => {})

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
              <tr>
                <Square value={this.state.board[0][0]} />
                <Square value={this.state.board[0][1]} />
                <Square value={this.state.board[0][2]} />
                <Square value={this.state.board[0][3]} />
                <Square value={this.state.board[0][4]} />
                <Square value={this.state.board[0][5]} />
                <Square value={this.state.board[0][6]} />
                <Square value={this.state.board[0][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[1][0]} />
                <Square value={this.state.board[1][1]} />
                <Square value={this.state.board[1][2]} />
                <Square value={this.state.board[1][3]} />
                <Square value={this.state.board[1][4]} />
                <Square value={this.state.board[1][5]} />
                <Square value={this.state.board[1][6]} />
                <Square value={this.state.board[1][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[2][0]} />
                <Square value={this.state.board[2][1]} />
                <Square value={this.state.board[2][2]} />
                <Square value={this.state.board[2][3]} />
                <Square value={this.state.board[2][4]} />
                <Square value={this.state.board[2][5]} />
                <Square value={this.state.board[2][6]} />
                <Square value={this.state.board[2][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[3][0]} />
                <Square value={this.state.board[3][1]} />
                <Square value={this.state.board[3][2]} />
                <Square value={this.state.board[3][3]} />
                <Square value={this.state.board[3][4]} />
                <Square value={this.state.board[3][5]} />
                <Square value={this.state.board[3][6]} />
                <Square value={this.state.board[3][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[4][0]} />
                <Square value={this.state.board[4][1]} />
                <Square value={this.state.board[4][2]} />
                <Square value={this.state.board[4][3]} />
                <Square value={this.state.board[4][4]} />
                <Square value={this.state.board[4][5]} />
                <Square value={this.state.board[4][6]} />
                <Square value={this.state.board[4][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[5][0]} />
                <Square value={this.state.board[5][1]} />
                <Square value={this.state.board[5][2]} />
                <Square value={this.state.board[5][3]} />
                <Square value={this.state.board[5][4]} />
                <Square value={this.state.board[5][5]} />
                <Square value={this.state.board[5][6]} />
                <Square value={this.state.board[5][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[6][0]} />
                <Square value={this.state.board[6][1]} />
                <Square value={this.state.board[6][2]} />
                <Square value={this.state.board[6][3]} />
                <Square value={this.state.board[6][4]} />
                <Square value={this.state.board[6][5]} />
                <Square value={this.state.board[6][6]} />
                <Square value={this.state.board[6][7]} />
              </tr>
              <tr>
                <Square value={this.state.board[7][0]} />
                <Square value={this.state.board[7][1]} />
                <Square value={this.state.board[7][2]} />
                <Square value={this.state.board[7][3]} />
                <Square value={this.state.board[7][4]} />
                <Square value={this.state.board[7][5]} />
                <Square value={this.state.board[7][6]} />
                <Square value={this.state.board[7][7]} />
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    )
  }
}

export default App
