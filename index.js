const returnFirstTwoDrivers = (function (drivers) {return drivers.slice(0, 2)});
const returnLastTwoDrivers = (function (drivers) {return drivers.slice(-2)});
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(n){
  return (function (fare){return fare * n});
}

function fareDoubler(fare){
  return fare * 2;
}

function fareTripler(fare){
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, callback){
  return (callback(arrayOfDrivers));
}
