// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  const fareMultiplier = function(fare){
    return fare * multiplier
  }
  return fareMultiplier
}

const fareDoubler = function(fare){
  fareMultiplier = createFareMultiplier(2)
  return fareMultiplier(fare)
}

const fareTripler = function(fare){
  fareMultiplier = createFareMultiplier(3)
  return fareMultiplier(fare)
}

const selectDifferentDrivers = function(drivers, passedin){
  return passedin(drivers)
}
