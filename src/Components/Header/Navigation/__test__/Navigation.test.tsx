import React from 'react';
import {render,screen} from '@testing-library/react';
import {store} from "../../../../store/store";
import {Provider} from 'react-redux';
import Navigation from '../Navigation';
import {BrowserRouter} from "react-router-dom";

describe('Navigation', () => {
    test('renders Navigation component', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByText('Vehicle Manufacturers')).toBeInTheDocument();
    });
});