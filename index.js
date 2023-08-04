// Code your solution here
function findMatching(driverArray, name) {
  const nameSearch = driverArray.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return nameSearch;
}

function fuzzyMatch(driversArray, name) {
  const searchLetter = driversArray.filter((driver) => {
    return driver[0] === name[0];
  });
  return searchLetter;
}

function matchName(driverObjects, string) {
  const searchObjects = driverObjects.filter((objects) => {
    return objects.name === string;
  });
  return searchObjects;
}
