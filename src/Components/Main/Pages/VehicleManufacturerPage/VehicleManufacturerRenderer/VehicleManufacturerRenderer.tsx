import React, {FC} from "react";
import styled from "styled-components";
import VehicleModelCard from "../VehicleModelCard/VehicleModelCard";

const CarManufacturerRendererStyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

interface CarManufacturerRendererPropTypes {
    vehicleManufacturerData: string[],
    vehicleManufacturerName?: string,
}

const VehicleManufacturerRenderer: FC<CarManufacturerRendererPropTypes> =
    ({
         vehicleManufacturerData,
         vehicleManufacturerName
     }) => {

        return (
            <CarManufacturerRendererStyledDiv className={'car-manufacturer-cards'}>

                {vehicleManufacturerData.map(carModel => {
                    return (
                        <VehicleModelCard key={carModel} vehicleModel={carModel}
                                          vehicleManufacturerName={vehicleManufacturerName}/>
                    )
                })}
            </CarManufacturerRendererStyledDiv>
        )
    };
export default VehicleManufacturerRenderer