// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomValue})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h2>Random Number</h2>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
