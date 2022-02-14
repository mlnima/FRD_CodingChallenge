import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturerPage from '../VehicleManufacturerPage';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerPage', () => {
    test('renders VehicleManufacturerPage component, render loading before cards render', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturerPage/>
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Loading.../)).toBeInTheDocument();

    });
});

