import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleModelPageFilter from '../VehicleModelPageFilter';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerRenderer', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleModelPageFilter name={'enginePowerPS'}/>
                </Provider>
            </BrowserRouter>
        );
    });
});