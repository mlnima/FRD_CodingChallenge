import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturersRenderer from '../VehicleManufacturersRenderer';
import {BrowserRouter} from "react-router-dom";

const mockData = ['x1','x2','x3','x4']

describe('VehicleManufacturersPage', () => {
    test('renders VehicleManufacturersPage component, render loading before cards render', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturersRenderer carManufacturers={mockData}/>
                </Provider>
            </BrowserRouter>
        );
    });
});

