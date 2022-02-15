import React from 'react';
import {render} from '@testing-library/react';
import {store} from "../../../store/store";
import {Provider} from 'react-redux';
import Main from '../Main';
import {BrowserRouter} from "react-router-dom";

describe('Main', () => {
    test('renders Main component', () => {

        const view = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        );

        const mainRouter = view.container.querySelector('.main')
        expect(mainRouter).toBeInTheDocument()
    });
});