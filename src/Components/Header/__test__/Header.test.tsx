import React from 'react';
import {render} from '@testing-library/react';
import {store} from "../../../store/store";
import {Provider} from 'react-redux';
import Header from '../Header';
import {BrowserRouter} from "react-router-dom";

describe('Header', () => {
    test('renders Header component', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
    });
});