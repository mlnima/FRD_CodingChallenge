import React, {FC} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {StoreTypes} from "../../../../../typeScriptTypes/storeTypes";
import {changeFiltersData} from "../../../../../store/actions/vehicleModelPageActions";
import _convertVariableNameToSplitStringName from "../../../../../_util/_convertVariableNameToSplitStringName";

const StyledSelect = styled.select`
  max-width: 200px;
`

interface CarModelPageFilterPropTypes {
    name: string,
}

const VehicleModelPageFilter: FC<CarModelPageFilterPropTypes> = ({name}) => {
    const dispatch = useDispatch()
    const VehicleModelPageFilterData = useSelector((store: StoreTypes) => {
        return {
            currentFilterOptions: store.vehicleModelState.filtersOptions[name] || [],
            currentFilterValue: store.vehicleModelState.filtersData[name]
        }
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeFiltersData(name, e.target.value))
    }

    return (
        <StyledSelect className={'custom-select'} value={VehicleModelPageFilterData.currentFilterValue}
                      onChange={onChangeHandler} name={name}>
            <option value={''}>{_convertVariableNameToSplitStringName(name)}</option>
            {VehicleModelPageFilterData.currentFilterOptions.sort((a: string | number, b: string | number) => a > b ? 1 : -1).map(option => {
                return <option key={option} value={option}>{_convertVariableNameToSplitStringName(option)}</option>
            })}
        </StyledSelect>
    )
};
export default VehicleModelPageFilter
