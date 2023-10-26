// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    // Use the slice method to create a new array containing the first two drivers.
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    // Use the slice method to create a new array containing the last two drivers.
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiply) {
    // Return a function that multiplies a fare by the given factor (multiply).
    return function (fare) {
        return fare * multiply;
    };
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
}