// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    isDarked: true,
  }
  isClicked = () => {
    this.setState(prevState => ({isDarked: !prevState.isDarked}))
  }
  render() {
    const {isDarked} = this.state
    const modeClassName = isDarked ? 'dark-mode' : 'light-mode'
    const buttonText = isDarked ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="card-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="card-heading">Click To Change Mode</h1>
          <button onClick={this.isClicked} className="btn" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
