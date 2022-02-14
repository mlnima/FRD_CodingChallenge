const _filterVehicles = (vehicles, filtersData) => {
    return vehicles.filter((vehicle) => {
        const filterByEnginePowerPS = !filtersData.enginePowerPS || vehicle.enginePowerPS == filtersData.enginePowerPS
        const filterByEngineCapacity = !filtersData.engineCapacity ||
              vehicle.engineCapacity == filtersData.engineCapacity
        const filterByEnginePowerKW = !filtersData.enginePowerKW || vehicle.enginePowerKW == filtersData.enginePowerKW
        const filterByBodyType = !filtersData.bodyType || vehicle.bodyType === filtersData.bodyType
        const filterByFuelType = !filtersData.fuelType || vehicle.fuelType === filtersData.fuelType
        const checkForAtLeastOneFilter = filtersData.enginePowerPS ||
            filtersData.engineCapacity ||
            filtersData.enginePowerKW ||
            filtersData.bodyType ||
            filtersData.fuelType

        if (
            filterByEnginePowerPS &&
            filterByEngineCapacity &&
            filterByEnginePowerKW &&
            filterByBodyType &&
            filterByFuelType &&
            checkForAtLeastOneFilter
        ) return vehicle
    })
}

export default _filterVehicles