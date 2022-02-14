import React from 'react';
import {render} from '@testing-library/react';
import {store} from "./store/store";
import {Provider} from 'react-redux';
import App from './App';
import {BrowserRouter} from "react-router-dom";

describe('App', () => {
    test('renders App component', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        );
    });
});