import * as types from '../types'

const initialState = {
    filtersData:{
        enginePowerPS: 0,
        engineCapacity: 0,
        enginePowerKW: 0,
        bodyType: '',
        fuelType: '',
    },
    filtersOptions:{
        enginePowerPS: 0,
        engineCapacity: 0,
        enginePowerKW: 0,
        bodyType: '',
        fuelType: '',
    },
    vehicleModelData: [],
    filteredVehicleModelData: [],
}

export const vehicleModelPageReducer = (state = initialState, action: { type: string, payload: any }) => {

    switch (action.type) {
        case types.SET_VEHICLE_FILTERS_DATA:
            return {
                ...state,
                filters: action.payload
            }

        case types.CHANGE_VEHICLE_FILTER:
            return {
                ...state,
                filtersData: {
                    ...state.filtersData,
                    ...action.payload
                }
            }
        case types.SET_VEHICLE_FILTERS_OPTIONS:
            return {
                ...state,
                filtersOptions : action.payload
            }

        case types.GET_VEHICLE_MODEL_DATA:
            return {
                ...state,
                vehicleModelData: action.payload
            }
        default:
            return state
    }
}