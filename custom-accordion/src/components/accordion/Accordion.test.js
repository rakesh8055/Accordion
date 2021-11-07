import React from 'react';
import Accordion from './Accordion';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const props = {
    type: 'Public',
    title: 'If you or your child were born in the UK',
    text: 'If you were born in the UK, you might not need to apply to stay – you might already be a British citizen. Your child might be a British citizen if you lived in the UK for 5 years before they were born.',
    handleClick: () => {}
}

test('verify title of Accordion', () => {
    const { getByTestId } = render(<Accordion {...props}/>)
    //verify the title
    const accTitle = getByTestId('title');
    expect(accTitle.textContent).toBe(props.title);
})

test('verify plus button to appear on load', () => {
    const { getByTestId } = render(<Accordion {...props}/>)
    //verify the plus button to appear on load
    const plusMinusToggle = getByTestId('plus-minus-toggle');
    expect(plusMinusToggle.textContent).toBe('+');
})

test('verify the toggle functionality', () => {
    const { getByTestId } = render(<Accordion {...props}/>)
    //on toggle verify the button to be minus
    const plusMinusToggle = getByTestId('plus-minus-toggle');
    const toggleBtn = getByTestId('toggle-btn');
    fireEvent.click(toggleBtn);
    expect(plusMinusToggle.textContent).toBe('-');
})