import {combineReducers} from "redux";
import {globalStateReducer} from "./reducers/globalReducer";
import {vehicleModelPageReducer} from "./reducers/vehicleModelPageReducer";

export default combineReducers({
    globalState:globalStateReducer,
    vehicleModelState:vehicleModelPageReducer,
})