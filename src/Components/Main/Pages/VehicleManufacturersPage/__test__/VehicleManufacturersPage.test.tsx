import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturersPage from '../VehicleManufacturersPage';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturersPage', () => {
    test('renders VehicleManufacturersPage component, render loading before cards render', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturersPage/>
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Loading.../)).toBeInTheDocument();

    });
});

