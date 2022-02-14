import {FC} from "react";
import VehicleModelPageFilter from "./VehicleModelPageFilter";
import styled from "styled-components";

const VehicleModelPageFiltersStyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  width: 100%;
`

const VehicleModelPageFilters: FC = () => {

    const filterSections = ['enginePowerPS', 'engineCapacity', 'enginePowerKW', 'bodyType', 'fuelType']

    return (
        <VehicleModelPageFiltersStyledDiv>
            {filterSections.map((filter: any, index: number) => {
                return (
                    <VehicleModelPageFilter key={index} name={filter} />
                )
            })}
        </VehicleModelPageFiltersStyledDiv>
    )
};
export default VehicleModelPageFilters

