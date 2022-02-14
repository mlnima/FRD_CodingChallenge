import React from 'react';
import {render} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleModelPageFilters from '../VehicleModelPageFilters';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerRenderer', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleModelPageFilters />
                </Provider>
            </BrowserRouter>
        );
    });
});