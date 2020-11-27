import './App.css'
import FileSelector from './components/FileSelector'
import DriverHistoryTable from './components/DriverHistoryTable'
import React, { useState } from 'react'

function App() {
  const [driverHistory, setDriverHistory] = useState([])
  const [isDriverHistoryAvailable, setIsDriverHistoryAvailable] = useState(
    false
  )

  const loadDriverHistory = (driverHistory) => {
    setDriverHistory(driverHistory)
    setIsDriverHistoryAvailable(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Upload a driver history file:{' '}
          <FileSelector onChange={loadDriverHistory} />
        </p>
        {isDriverHistoryAvailable ? (
          <DriverHistoryTable driverHistory={driverHistory} />
        ) : null}
      </header>
    </div>
  )
}

export default App
