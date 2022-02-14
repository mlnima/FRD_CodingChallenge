import axios, {AxiosError, AxiosResponse} from "axios";
import * as types from "../types";
import _vehicleInfoReducer from "../../_variables/_vehicleInfoReducer";

// @ts-ignore
export const getVehicleModelData = (vehicleManufacturerName, carModel: string | undefined) => async (dispatch: any) => {
    await axios.get(`http://localhost:8080/api/vehicles?make=${vehicleManufacturerName}&model=${carModel}`)
        .then((serverResponse: AxiosResponse<any>) => {
            if (serverResponse.data.length) {
                dispatch({
                    type: types.GET_VEHICLE_MODEL_DATA,
                    payload: serverResponse.data
                })
                dispatch({
                    type: types.SET_VEHICLE_FILTERS_OPTIONS,
                    payload: _vehicleInfoReducer(serverResponse.data)
                })
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: true
                })
            } else {
                dispatch({
                    type: types.SET_GOT_RESULT,
                    payload: false
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
export const changeFiltersData = (name: string, value: string | number) => async (dispatch: any) => {
    dispatch({
        type: types.CHANGE_VEHICLE_FILTER,
        payload: {[name]: value}
    })
}





