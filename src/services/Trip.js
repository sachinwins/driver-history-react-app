import CONSTANTS from './constants'
const { VALID_MIN_AVG_SPEED, VALID_MAX_AVG_SPEED } = CONSTANTS

export default class Trip {
  constructor(tripDetails) {
    let [tripStartTime, tripEndTime, tripDistance] = tripDetails
    tripDistance = +tripDistance
    let tripDuration = this.getTripDuration(tripStartTime, tripEndTime)
    let tripAvgSpeed = this.getTripAvgSpeed(tripDuration, tripDistance)
    if (
      VALID_MIN_AVG_SPEED <= tripAvgSpeed &&
      tripAvgSpeed <= VALID_MAX_AVG_SPEED
    ) {
      return {
        tripStartTime,
        tripEndTime,
        tripDistance,
        tripDuration,
        tripAvgSpeed,
        isValidTrip: true,
      }
    } else {
      return { isValidTrip: false }
    }
  }
  getTripDuration(startTime, endTime) {
    let startTimeArray = startTime.split(':')
    let endTimeArray = endTime.split(':')
    let startTimeInMinutes = 60 * +startTimeArray[0] + +startTimeArray[1]
    let endTimeInMinutes = 60 * +endTimeArray[0] + +endTimeArray[1]
    return endTimeInMinutes - startTimeInMinutes
  }
  getTripAvgSpeed(tripDuration, tripDistance) {
    return (tripDistance * 60) / tripDuration
  }
}
