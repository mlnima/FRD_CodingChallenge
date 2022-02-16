import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
import {store} from "../../../../../store/store";
import {Provider} from 'react-redux';
import HomePage from '../HomePage';
import {BrowserRouter} from "react-router-dom";

describe('ReloadPageData', () => {
    test('renders ReloadPageData component and tests', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Find your green car/);
        expect(screen.getByAltText('hero-image')).toBeInTheDocument();
        const letsStartButton = screen.getByText('Lets Start')
        expect(letsStartButton).toBeInTheDocument();

    });
});
