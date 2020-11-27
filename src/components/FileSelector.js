import React from 'react'
import PropTypes from 'prop-types'
import getTrips from '../services/getTrips'

const FileSelector = (props) => {
  const uploadFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const file = e.target.result
      const allLines = file.split(/\r\n|\n/)
      const driverHistory = getTrips(allLines)
      props.onChange(driverHistory)
    }
    reader.onerror = (e) => {
      alert(e.target.error.name)
    }
    reader.readAsText(file)
  }
  return (
    <>
      <input
        onChange={(e) => uploadFile(e)}
        type="file"
        name="driverHistoryFile"
        id="driverHistoryFile"
      />
    </>
  )
}
FileSelector.propTypes = {
  onChange: PropTypes.func,
}
export default FileSelector
