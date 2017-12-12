// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num){
  return function(value){
    return value * num
  }
}

const fareDoubler = function(num){
  return num * 2
}

const fareTripler = function(num){
  return num * 3
}

const selectDifferentDrivers = function(arr, func){
  return func(arr)
}
