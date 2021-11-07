import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage';

test('Verify the header in loginPage', () => {
    const { getByTestId } = render(<LoginPage/>);
    const header = getByTestId('login-header');
    expect(header).toHaveLength(1);
})
