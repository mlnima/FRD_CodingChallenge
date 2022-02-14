import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleModelCard from '../VehicleModelCard';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerCard', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleModelCard vehicleModel={'mockVehicleModel'}
                                      vehicleManufacturerName={'mockManufacturerName'}
                    />
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
});

