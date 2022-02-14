import React, {FC} from "react";
import styled from "styled-components";
import VehicleManufacturerCard from "../VehicleManufacturerCard/VehicleManufacturerCard";

const CarManufacturersRendererStyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

interface VehicleManufacturersRendererPropTypes {
    carManufacturers: string[],
}

const VehicleManufacturersRenderer: FC<VehicleManufacturersRendererPropTypes> = ({carManufacturers}) => {

    return (
        <CarManufacturersRendererStyledDiv className={'ads-area'}>
            {carManufacturers.map(VehicleManufacturer => {
                return (
                    <VehicleManufacturerCard key={VehicleManufacturer} VehicleManufacturer={VehicleManufacturer}/>
                )
            })}
        </CarManufacturersRendererStyledDiv>
    )

};
export default VehicleManufacturersRenderer