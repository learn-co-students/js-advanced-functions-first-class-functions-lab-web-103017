// Code your solution in this file!
const returnFirstTwoDrivers = (function (array) {
  return array.slice(0, 2);
})

const returnLastTwoDrivers = (function (array) {
  return array.slice(array.length - 2, array.length);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {return (function(fare) {
  return integer * fare
})};

const fareDoubler = (function(fare) {
  return (createFareMultiplier(1)(fare) * 2)
});

const fareTripler = (function(fare) {
  return (createFareMultiplier(1)(fare) * 3)
});

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}
