import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGeneratingRandomNumber = () => {
    const randomNumberGenerated = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNumberGenerated})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGeneratingRandomNumber}
            className="button"
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
