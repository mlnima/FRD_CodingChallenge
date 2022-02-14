import React, {FC, useEffect, useMemo} from "react";
import styled from "styled-components";
import VehicleCard from "../VehicleCard/VehicleCard";
import {StoreTypes} from "../../../../../typeScriptTypes/storeTypes";
import {useDispatch, useSelector} from "react-redux";
import _filterVehicles from "../../../../../_variables/_filterVehicles";
import {setGotResult} from "../../../../../store/actions/globalActions";


const VehicleCardRendererStyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const VehicleCardRenderer: FC = () => {
    const dispatch = useDispatch()
    const vehiclesData = useSelector((store: StoreTypes) => store.vehicleModelState.vehicleModelData)
    const filtersData = useSelector((store: StoreTypes) => store.vehicleModelState.filtersData)

    const vehicles = useMemo(() => _filterVehicles(vehiclesData, filtersData), [filtersData, vehiclesData])

    useEffect(() => {
        vehicles.length ? dispatch(setGotResult(true)) :  dispatch(setGotResult(false))
    }, [vehicles]);

    return (
        <VehicleCardRendererStyledArticle>
            {vehicles.map((Vehicle, index) => {
                return <VehicleCard key={index} Vehicle={Vehicle}/>
            })}
        </VehicleCardRendererStyledArticle>
    )
};

export default VehicleCardRenderer


