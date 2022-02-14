import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleCard from '../VehicleCard';
import {BrowserRouter} from "react-router-dom";

const vehicleMockData = {
    "make": "FORD",
    "model": "Fiesta",
    "enginePowerPS": 68,
    "enginePowerKW": 50,
    "fuelType": "Diesel",
    "bodyType": "Limousine",
    "engineCapacity": 1399
}

describe('VehicleManufacturerCard', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleCard Vehicle={vehicleMockData}/>
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});

