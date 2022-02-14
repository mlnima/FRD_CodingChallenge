export interface VehicleTypes {
    make: string
    model: string
    enginePowerPS: number
    enginePowerKW: number
    fuelType: string
    bodyType: string
    engineCapacity: number
}

export interface FiltersTypes {
    enginePowerPS: number[],
    engineCapacity: number[],
    enginePowerKW: number[],
    bodyType: string[],
    fuelType: string[],
}

export interface GlobalStateTypes {
    gotResult: boolean;
    carManufacturers: string[],
    carManufacturer: string[],
    lastUpdate: Number,
    errs: {}[]
    err: {}
}

export interface VehicleModelStateTypes {
    filtersData: VehicleTypes,
    filtersOptions:{}
    vehicleModelData: VehicleTypes[],
    filteredVehicleModelData: VehicleTypes[],
}

export interface StoreTypes {
    vehicleModelState: VehicleModelStateTypes;
    globalState: GlobalStateTypes;
}





