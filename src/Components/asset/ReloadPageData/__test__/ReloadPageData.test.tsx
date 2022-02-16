import React from 'react';
import {screen, render} from '@testing-library/react';
import {store} from "../../../../store/store";
import {Provider} from 'react-redux';
import ReloadPageData from '../ReloadPageData';
import {BrowserRouter} from "react-router-dom";


let container = document.createElement('div');

beforeEach(() => {
    container = document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container);
    container.remove();
})

describe('ReloadPageData', () => {
    test('renders ReloadPageData component and tests', () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <ReloadPageData/>
                </Provider>
            </BrowserRouter>
        );

        const heading1 = container.querySelector('h1')
        const reloadButton = screen.getByRole('button')
        const retryMessage = container.querySelector('.retry-message')

        expect(heading1.textContent).toBe('We Are Sorry Something Went Wrong');
        expect(retryMessage.textContent).toBe('Please try again in few minutes');

        expect(screen.getByText('Reload')).toBeInTheDocument();
        expect(screen.getByText(/We Are Sorry Something Went Wrong/)).toBeInTheDocument();
        expect(screen.getByText(/Please try again in few minutes/)).toBeInTheDocument();
        expect(reloadButton).not.toBeDisabled()
        expect(reloadButton).toBeInTheDocument();

    });
});
