import { useState } from 'react';
import './Accordion.styles.scss';

const Accordion = (props) => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(prev => !prev);
        props.handleClick(props.index);
    }

    return(
        <div className={`wrapper ${props.type === 'Adviser' ? 'adviser' : ''}`}>
            <button data-testid='toggle-btn' onClick={toggle} className={`toggle-btn ${props.type === 'Adviser' ? 'adviser-btn' : ''}`}>
                <div className='title-content'>
                    {props.type === 'Adviser' && <div data-testid='tag-container' className='tag-container'><span>Adviser</span></div>}
                    <h4 data-testid='title'>{props.title}</h4>
                </div>
                {props.type === 'Adviser' && <button data-testid='reference-btn' className='reference-btn'>Reference</button>}
                <span data-testid='plus-minus-toggle'>{active && props.clicked === props.index ? '-' : '+'}</span>
            </button>
            {
                active && props.clicked === props.index && 
                <div className='content'>
                    <p data-testid='content-text'>{props.text}</p>
                    <p><a href="#"> Check if you're a British citizen</a>{` on GOV.UK.`}</p>
                    <hr></hr>
                    <button data-testid='close-btn' onClick={toggle} className='close-btn'>Close</button>
                </div>
            }
        </div>
    )
}

export default Accordion;