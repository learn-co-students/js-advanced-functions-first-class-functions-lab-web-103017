// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function(value){
    return value*multiplier
  }
}

const fareDoubler = function(value){
  return value*2
}

const fareTripler = function(value){
  return value*3
}

const selectDifferentDrivers = function(array, func){
  return func(array)
}
