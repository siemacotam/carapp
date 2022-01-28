export const filterData = (filterOption, carsData, parkingData, poiData, setFilteredData ) => {
    let data = []


if(filterOption.ALL){data.push(carsData)}
if(filterOption.NONE){data = []}
if(filterOption.AVAILABLE){
    if(filterOption.FULL){
        data.push(carsData.filter((i) => i.status === "AVAILABLE" && i.batteryLevelPct > 75))
    }
    if(filterOption.HALF){
        data.push(carsData.filter((i) => i.status === "AVAILABLE" && i.batteryLevelPct > 50))
    }
    if(!filterOption.HALF && !filterOption.FULL){data.push(carsData.filter((i) => i.status === "AVAILABLE"))}
}
if(filterOption.TAKEN){
    if(filterOption.FULL){
        data.push(carsData.filter((i) => i.status === "TAKEN" && i.batteryLevelPct > 75))
    }
    if(filterOption.HALF){
        data.push(carsData.filter((i) => i.status === "TAKEN" && i.batteryLevelPct > 50))
    }
    if(!filterOption.HALF && !filterOption.FULL){
        data.push(carsData.filter((i) => i.status === "TAKEN"))}
}

if(filterOption.FULL){
    if(!filterOption.AVAILABLE && !filterOption.TAKEN){
        data.push(carsData.filter((i) => i.batteryLevelPct > 75))}}

if(filterOption.HALF){
    if(!filterOption.AVAILABLE && !filterOption.TAKEN){
        data.push(carsData.filter((i) => i.batteryLevelPct > 50))}}

if(filterOption.PARKING){data.push(parkingData)}
if(filterOption.INFO){data.push(poiData.filter((i) => i.status === "INFO"))}
if(filterOption.FOOD){data.push(poiData.filter((i) => i.status === "FOOD"))}
if(filterOption.BED){data.push(poiData.filter((i) => i.status === "BED"))}
if(filterOption.LIBRARY){data.push(poiData.filter((i) => i.status === "LIBRARY"))}

const merged = [].concat.apply([], data)
setFilteredData(merged)


  };