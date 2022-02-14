import React, {FC, useEffect, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreTypes} from "../../../../typeScriptTypes/storeTypes";
import styled from "styled-components";
import ReloadPageData from "../../../asset/ReloadPageData/ReloadPageData";
import {getVehicleManufacturers} from "../../../../store/actions/globalActions";

const CarManufacturersRenderer = React.lazy(() => import('./VehicleManufacturersRenderer/VehicleManufacturersRenderer'))

const CarManufacturersStyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const VehicleManufacturersPage: FC = () => {
    const dispatch = useDispatch()
    const gotError = useSelector((store: StoreTypes) => !!store.globalState.err)
    const lastUpdate = useSelector((store: StoreTypes) => store.globalState.lastUpdate)

    const carManufacturersPageData = useSelector((store: StoreTypes) => {
        return {
            carManufacturersData: store.globalState.carManufacturers,
            gotError: !!store.globalState.err
        }
    })

    useEffect(() => {
        dispatch(getVehicleManufacturers())
    }, [lastUpdate]);

    return (
        <CarManufacturersStyledDiv>
            <Suspense fallback={<h1>Loading...</h1>}>
                {gotError ? <ReloadPageData/> : null}
                <CarManufacturersRenderer carManufacturers={carManufacturersPageData.carManufacturersData}/>
            </Suspense>
        </CarManufacturersStyledDiv>
    )
};
export default VehicleManufacturersPage