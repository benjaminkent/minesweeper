import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "id": 1,
      "board": [
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ],
        [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " "
        ]
      ],
    }
  }

  render() {
    return (
      <body>
        <header>
          <h1>Minesweeper</h1>
        </header>

        <select>
          <option value="">Choose Difficulty</option>
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>

        <main>

          <h2><span>010</span><button>😀</button><span>000</span></h2>

          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

        </main>
      </body >
    );
  }
}

export default App;



