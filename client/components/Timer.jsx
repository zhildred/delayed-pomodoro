import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeLeft: props.timerDuration,
      breakLeft: 0,
      paused: true
    }
    this.startTimer = this.startTimer.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleBreak = this.handleBreak.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  startTimer() {
    clearInterval(this.timer)
    this.setState({
      paused: false
    })

    this.timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
      } else {
        this.setState({
          timeLeft: this.props.timerDuration,
          breakLeft: this.state.breakLeft + 5
        })
      }
    }, 1000)
  }

  handleStart() {
    this.startTimer()
  }

  handleBreak() {
    clearInterval(this.timer)

    this.timer = setInterval(() => {
      if (this.state.breakLeft > 0) {
        this.setState({
          breakLeft: this.state.breakLeft - 1
        })
      } else {
        this.startTimer()
      }
    }, 1000)
  }

  handlePause() {
    clearInterval(this.timer)
    this.setState({
      paused: true
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Time remaining</h2>
          <h2>{this.state.timeLeft}</h2>
        </div>
        {this.state.paused
          ? <button onClick={this.handleStart}>Start Timer</button>
          : <button onClick={this.handlePause}>Pause Timer</button>
        }
        <br />
        <div>
          <h3>Break Remaining</h3>
          <h3>{this.state.breakLeft}</h3>
          <button onClick={this.handleBreak}>Take a break?</button>
        </div>
      </div>
    )
  }
}

export default Timer
