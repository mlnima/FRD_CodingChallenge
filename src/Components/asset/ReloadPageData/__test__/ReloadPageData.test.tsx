import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from "../../../../store/store";
import {Provider} from 'react-redux';
import ReloadPageData from '../ReloadPageData';
import {BrowserRouter} from "react-router-dom";

describe('ReloadPageData', () => {
    test('renders ReloadPageData component and tests', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ReloadPageData/>
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByText('Reload')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText(/We Are Sorry Something Went Wrong./)).toBeInTheDocument();
        expect(screen.getByText(/Please try again in few minutes/)).toBeInTheDocument();
    });
});