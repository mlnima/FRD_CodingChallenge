import React from 'react';
import {render} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturerRenderer from '../VehicleManufacturerRenderer';
import {BrowserRouter} from "react-router-dom";

const mockVehicleManufacturerData = [
    "B-MAX",
    "C-Max",
    "Cougar",
    "Econovan",
    "ECOSPORT",
    "Edge",
]


describe('VehicleManufacturerRenderer', () => {
    test('renders VehicleManufacturerCard component', async () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturerRenderer vehicleManufacturerData={mockVehicleManufacturerData}
                                                 vehicleManufacturerName={'mockVehicleManufacturerName'}
                    />
                </Provider>
            </BrowserRouter>
        );

        const vehicleManufacturerRenderer = container.querySelector('.car-manufacturer-cards')
        expect(vehicleManufacturerRenderer).toBeInTheDocument();

    });
});

