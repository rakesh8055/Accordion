import React from 'react';
import Accordion from './Accordion';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from 'react-router-dom';

const props = {
    type: 'Public',
    title: 'If you or your child were born in the UK',
    text: 'If you were born in the UK, you might not need to apply to stay – you might already be a British citizen. Your child might be a British citizen if you lived in the UK for 5 years before they were born.',
    handleClick: () => {}
}

test('verify title of Accordion', () => {
    const { getByTestId } = render(<BrowserRouter><Accordion {...props}/></BrowserRouter>)
    const accTitle = getByTestId('title');
    expect(accTitle.textContent).toBe(props.title);
})

test('verify plus button to appear on load', () => {
    const { getByTestId } = render(<BrowserRouter><Accordion {...props}/></BrowserRouter>)
    const plusMinusToggle = getByTestId('plus-minus-toggle');
    expect(plusMinusToggle.textContent).toBe('+');
})

test('verify content text does not appear on load', () => {
    const { getByTestId } = render(<BrowserRouter><Accordion {...props}/></BrowserRouter>)
    const text = screen.queryByTestId('content-text');
    expect(text).toBe(null);
})

test('verify the toggle functionality', () => {
    const { getByTestId } = render(<BrowserRouter><Accordion {...props}/></BrowserRouter>)
    const plusMinusToggle = getByTestId('plus-minus-toggle');
    const toggleBtn = getByTestId('toggle-btn');

    fireEvent.click(toggleBtn);
    expect(plusMinusToggle.textContent).toBe('-');
    const text = getByTestId('content-text');
    expect(text.textContent).toBe(props.text);

})

test('verify close button functionality', () => {
    const { getByTestId } = render(<BrowserRouter><Accordion {...props}/></BrowserRouter>)
    const toggleBtn = getByTestId('toggle-btn');
    fireEvent.click(toggleBtn);
    const clostBtn = getByTestId('close-btn');
    fireEvent.click(clostBtn);
    const text = screen.queryByTestId('content-text');
    expect(text).toBe(null);
})