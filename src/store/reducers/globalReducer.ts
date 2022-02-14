import * as types from '../types'

const initialState = {
    carManufacturers: [],
    carManufacturer: [],
    carModelData:[],
    gotResult:true,
    errs:[],
    err:null,
    lastUpdate:0,
    alert:{
        title:'alert',
        message:'test alert',
        type:'error'
    }
}

export const globalStateReducer = (state = initialState, action: { type: string, payload: any }) => {

    switch (action.type) {
        case types.GET_VEHICLE_MANUFACTURERS:
            return {
                ...state,
                carManufacturers: action.payload
            }
        case types.GET_VEHICLE_MANUFACTURER:
            return {
                ...state,
                carManufacturer: action.payload
            }
        case types.SET_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case types.SET_LAST_UPDATE:
            return {
                ...state,
                lastUpdate: action.payload
            }
        case types.SET_GOT_RESULT:
            return {
                ...state,
                gotResult: action.payload
            }
        case types.LOG_ERRORS :
            return {
                ...state,
                errs: [...state.errs,action.payload]
            }
        case types.SET_ERROR :
            return {
                ...state,
                err: action.payload
            }
        case types.REMOVE_ERROR_FROM_STORE :
            return {
                ...state,
                err: null
            }
        default:
            return state
    }
}