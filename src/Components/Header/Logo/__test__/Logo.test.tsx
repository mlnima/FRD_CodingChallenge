import React from 'react';
import {render,screen} from '@testing-library/react';
import {store} from "../../../../store/store";
import {Provider} from 'react-redux';
import Logo from '../Logo';
import {BrowserRouter} from "react-router-dom";

describe('Logo', () => {
    test('renders Logo component and Image', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Logo/>
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByTitle('friday')).toBeInTheDocument();
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});