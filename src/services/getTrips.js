import Trip from './Trip'
import UTILS from './utils'
import CONSTANTS from './constants'
const { COMMAND_TRIP } = CONSTANTS

const getTrips = (allLines) => {
  let drivers = {}
  let mapDrivers = new Map()
  const driverHistory = []
  // Reading line by line
  allLines.forEach((line) => {
    const [command, driverName, ...tripDetails] = line.split(' ')
    if (!drivers[driverName]) {
      drivers[driverName] = {
        totalDistance: 0,
        totalDuration: 0,
        mph: 0,
        trips: [],
      }
    }
    if (command === COMMAND_TRIP) {
      let newTrip = new Trip(tripDetails)
      newTrip.isValidTrip && drivers[driverName]['trips'].push(newTrip)
    }

    mapDrivers.set(driverName, drivers[driverName])
  })

  console.log(`mapDrivers = ${mapDrivers}`)
  for (let key of mapDrivers.keys()) {
    let driverTripDetails = mapDrivers.get(key).trips

    let totalDistance = UTILS.getTotalDistance(driverTripDetails)
    let totalDuration = UTILS.getTotalDuration(driverTripDetails)
    let mph = UTILS.getAverageSpeed(totalDistance, totalDuration)

    drivers[key]['totalDistance'] = Math.round(totalDistance)
    drivers[key]['totalDuration'] = totalDuration
    drivers[key]['mph'] = mph

    mapDrivers.set(key, drivers[key])
  }
  console.log('mapDrivers = ', mapDrivers)
  mapDrivers.forEach((key, value) => {
    const driverName = value
    const { totalDuration, totalDistance, mph } = key
    let record = {
      driverName,
      totalDuration,
      totalDistance,
      mph,
    }
    driverHistory.push(record)
  })
  console.log('driverHistory = ', driverHistory)
  return driverHistory
}

export default getTrips
