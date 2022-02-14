import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleCardRenderer from '../VehicleCardRenderer';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerRenderer', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleCardRenderer/>
                </Provider>
            </BrowserRouter>
        );
    });
});

