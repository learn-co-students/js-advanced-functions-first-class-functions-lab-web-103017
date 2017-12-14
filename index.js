// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (fare) {
    return int * fare
  }
}
//
// const fareDoubler = createFareMultiplier(2)

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, fun) {
  return fun(drivers)
}
