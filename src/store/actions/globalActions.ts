import * as types from "../types";
import axios, {AxiosResponse, AxiosError} from "axios";
import {GetVehicleManufacturerTypes} from "../../typeScriptTypes/apiCallTypes";

export const getVehicleManufacturers = () => async (dispatch: any) => {
    await axios.get('http://localhost:8080/api/makes')
        .then((serverResponse: AxiosResponse<any>) => {
            if (serverResponse.data.length) {
                dispatch({
                    type: types.GET_VEHICLE_MANUFACTURERS,
                    payload: serverResponse.data
                })
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: true
                })

                dispatch({
                    type: types.SET_ERROR,
                    payload: null
                })
            } else {
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: false
                })
                dispatch({
                    type: types.SET_ERROR,
                    payload: null
                })
            }
        }).catch((serverError: AxiosError<any>) => {
            dispatch({
                type: types.LOG_ERRORS,
                payload: serverError.stack
            })
            dispatch({
                type: types.SET_ERROR,
                payload: serverError.stack
            })
        })
}

export const getVehicleManufacturer = (vehicleManufacturerName: GetVehicleManufacturerTypes) => async (dispatch: any) => {
    await axios.get(`http://localhost:8080/api/models?make=${vehicleManufacturerName}`)
        .then((serverResponse: AxiosResponse<any>) => {
            if (serverResponse.data.length) {
                dispatch({
                    type: types.GET_VEHICLE_MANUFACTURER,
                    payload: serverResponse.data
                })
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: true
                })
                dispatch({
                    type: types.SET_ERROR,
                    payload: null
                })
            } else {
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: false
                })
                dispatch({
                    type: types.GET_VEHICLE_MANUFACTURER,
                    payload: []
                })
                dispatch({
                    type: types.SET_ERROR,
                    payload: null
                })
            }

        }).catch((serverError: AxiosError<any>) => {
            dispatch({
                type: types.LOG_ERRORS,
                payload: serverError.stack
            })
            dispatch({
                type: types.SET_ERROR,
                payload: serverError.stack
            })
        })
}

export const setLastUpdate = () => async (dispatch: any) => {
    dispatch({
        type: types.SET_LAST_UPDATE,
        payload: Date.now()
    })
}
export const setGotResult = (gotResult: boolean) => async (dispatch: any) => {
    dispatch({
        type: types.SET_GOT_RESULT,
        payload: gotResult
    })
}
export const removeErrorFromStore = () => async (dispatch: any) => {
    dispatch({
        type: types.REMOVE_ERROR_FROM_STORE,
        payload: Date.now()
    })
}



