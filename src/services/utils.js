const UTILS = {
  getAverageSpeed: (totalDistance, totalDuration) => {
    return totalDistance ? Math.round((totalDistance * 60) / totalDuration) : 0
  },

  getTotalDistance: (driverTripDetails) => {
    return driverTripDetails.reduce((accumulator, current) => {
      const acc = current.tripDistance + accumulator
      return acc
    }, 0)
  },

  getTotalDuration: (driverTripDetails) => {
    return driverTripDetails.reduce((accumulator, current) => {
      const acc = current.tripDuration + accumulator
      return acc
    }, 0)
  },
}

export default UTILS
