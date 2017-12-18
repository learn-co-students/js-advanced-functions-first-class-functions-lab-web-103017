// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(1).slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]

function createFareMultiplier(mul){
  return function(fare){ return fare * mul}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn){
  return fn(arrayOfDrivers)
}
