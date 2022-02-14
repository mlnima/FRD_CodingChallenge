import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../../../store/store";
import {Provider} from 'react-redux';
import VehicleManufacturerCard from '../VehicleManufacturerCard';
import {BrowserRouter} from "react-router-dom";

describe('VehicleManufacturerCard', () => {
    test('renders VehicleManufacturerCard component', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <VehicleManufacturerCard VehicleManufacturer={'mockManufacturer'}/>
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole('article')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
});

