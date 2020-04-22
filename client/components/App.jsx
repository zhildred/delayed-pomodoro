import React from 'react'
import Timer from './Timer'

const App = () => {
  return (
    <div className="app">
      <h1>Pomodoro</h1>
      <Timer timerDuration={25} />
    </div>
  )
}

export default App
