import React, {FC, useEffect, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreTypes} from "../../../../typeScriptTypes/storeTypes";
import {useParams} from 'react-router-dom';
import {getVehicleManufacturer} from "../../../../store/actions/globalActions";
import styled from "styled-components";
import ReloadPageData from "../../../asset/ReloadPageData/ReloadPageData";

const VehicleManufacturerRenderer = React.lazy(
    () => import('./VehicleManufacturerRenderer/VehicleManufacturerRenderer')
)

const VehicleManufacturerPageStyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const VehicleManufacturerPage: FC = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const VehicleManufacturerPageData = useSelector((store: StoreTypes) => {
        return {
            VehicleManufacturerData: store.globalState.carManufacturer,
            lastUpdate: store.globalState.lastUpdate,
            gotResult: store.globalState.gotResult,
            gotError: !!store.globalState.err
        }
    })

    useEffect(() => {
        // @ts-ignore
        dispatch(getVehicleManufacturer(params?.vehicleManufacturerName))
    }, [VehicleManufacturerPageData.lastUpdate]);

    return (
        <VehicleManufacturerPageStyledDiv>
            <Suspense fallback={<h1>Loading...</h1>}>

                {VehicleManufacturerPageData.gotError ? <ReloadPageData/> : null}
                { !VehicleManufacturerPageData.gotResult ? <h1>No Result</h1> : null}

                <VehicleManufacturerRenderer
                    vehicleManufacturerData={VehicleManufacturerPageData.VehicleManufacturerData}
                    vehicleManufacturerName={params?.vehicleManufacturerName}/>
            </Suspense>
        </VehicleManufacturerPageStyledDiv>
    )
};
export default VehicleManufacturerPage