// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return array.slice(array.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n){
  return function(fare){
    return fare*n
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fnc) {
  return fnc(drivers)
}
