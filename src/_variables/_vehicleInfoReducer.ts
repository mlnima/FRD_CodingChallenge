import {FiltersTypes, VehicleTypes} from "../typeScriptTypes/storeTypes";

const _vehicleInfoReducer = carModelData =>
    carModelData.reduce((filters: FiltersTypes, currentCarModelType: VehicleTypes) => {
        filters.enginePowerPS = [...new Set([...filters.enginePowerPS, currentCarModelType?.enginePowerPS])]
        filters.engineCapacity = [...new Set([...filters.engineCapacity, currentCarModelType?.engineCapacity])]
        filters.enginePowerKW = [...new Set([...filters.enginePowerKW, currentCarModelType?.enginePowerKW])]
        filters.bodyType = [...new Set([...filters.bodyType, currentCarModelType?.bodyType])]
        filters.fuelType = [...new Set([...filters.fuelType, currentCarModelType?.fuelType])]
        return filters
    }, {
        enginePowerPS: [],
        engineCapacity: [],
        enginePowerKW: [],
        bodyType: [],
        fuelType: [],
    })

export default _vehicleInfoReducer