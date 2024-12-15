function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, query){
    return drivers.filter(driver => {
        return driver.toLowerCase().startsWith(query.toLowerCase());
    });
}

function matchName(drivers, nameToMatch){
    return drivers.filter(driver => driver.name === nameToMatch);
}