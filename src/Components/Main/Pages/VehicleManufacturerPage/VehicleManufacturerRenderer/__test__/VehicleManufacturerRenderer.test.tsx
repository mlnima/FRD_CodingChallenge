import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturerRenderer from '../VehicleManufacturerRenderer';
import {BrowserRouter} from "react-router-dom";


// const mockData = [
//     {
//         "make": "FORD",
//         "model": "Fiesta",
//         "enginePowerPS": 60,
//         "enginePowerKW": 44,
//         "fuelType": "Benzin",
//         "bodyType": "Limousine",
//         "engineCapacity": 1299
//     },
//     {
//         "make": "FORD",
//         "model": "Fiesta",
//         "enginePowerPS": 20,
//         "enginePowerKW": 44,
//         "fuelType": "Benzin",
//         "bodyType": "Limousine",
//         "engineCapacity": 1299
//     }
// ]

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
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturerRenderer vehicleManufacturerData={mockVehicleManufacturerData}
                                                 vehicleManufacturerName={'mockVehicleManufacturerName'}
                    />
                </Provider>
            </BrowserRouter>
        );
    });
});

