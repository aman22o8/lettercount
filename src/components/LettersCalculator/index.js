// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {initial: ''}

  evaluating = event => {
    console.log(event.target.value)
    return this.setState({initial: event.target.value})
  }

  render() {
    const {initial} = this.state
    console.log(initial.length)
    return (
      <div className="bg_container">
        <div className="left_container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label_heading" htmlFor="phrase">
            Enter the Phrase
          </label>
          <input
            onChange={this.evaluating}
            id="phrase"
            type="text"
            placeholder="Enter the phrase"
            className="input_container"
            value={initial}
          />
          <p className="last_value">No.of letters: {initial.length}</p>
          <h1 className="text_displayed">Text will be displayed below </h1>
          <p className="last_">{initial}</p>
        </div>
        <div className="right_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="myimage"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
