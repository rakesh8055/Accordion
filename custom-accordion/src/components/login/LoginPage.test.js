import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';

test('Verify the header in loginPage', () => {
    const { getByTestId } = render(<BrowserRouter><LoginPage/></BrowserRouter>);
    const header = getByTestId('login-header');
    expect(header.textContent).toBe('Sign in using Google');
})

test('Verify the google login button', () => {
    const { getByTestId } = render(<BrowserRouter><LoginPage/></BrowserRouter>);
    const googleLoginBtn = getByTestId('google-login-btn');
})