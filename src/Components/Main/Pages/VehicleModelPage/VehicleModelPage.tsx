import React, {FC, useEffect, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getVehicleModelData} from "../../../../store/actions/vehicleModelPageActions";
import VehicleModelPageFilters from "./VehicleModelPageFilters/VehicleModelPageFilters";
import VehicleCardRenderer from "./VehicleCardRenderer/VehicleCardRenderer";
import {StoreTypes} from "../../../../typeScriptTypes/storeTypes";
import ReloadPageData from "../../../asset/ReloadPageData/ReloadPageData";
import styled from "styled-components";

const VehicleModelPageStyledDiv = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const VehicleModelPage: FC = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const gotError = useSelector((store: StoreTypes) => !!store.globalState.err)
    const gotResult = useSelector((store: StoreTypes) => store.globalState.gotResult)
    const lastUpdate = useSelector((store: StoreTypes) => store.globalState.lastUpdate)

    useEffect(() => {
        dispatch(getVehicleModelData(params.vehicleManufacturerName, params.carModel))
    }, [lastUpdate]);

    return (
        <VehicleModelPageStyledDiv>
            <VehicleModelPageFilters/>
            {gotError ? <ReloadPageData/> : null}
            {(!gotResult && !gotError) || (!gotResult && !!lastUpdate) ?
                <h1>No Vehicle Match The Current Filters</h1> :
                null
            }
            <Suspense fallback={<h1>Loading...</h1>}>
                <VehicleCardRenderer/>
            </Suspense>
        </VehicleModelPageStyledDiv>
    )
};
export default VehicleModelPage
