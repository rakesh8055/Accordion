import { useState } from 'react';
import './Accordion.styles.scss';

const Accordion = (props) => {
    const [active, setActive] = useState(false);

    const toggle = () => setActive(prev => !prev);

    return(
        <div className='wrapper'>
            <button onClick={toggle} className='toggle-btn'>
                <h4>{props.title}</h4>
                <span>{active ? '-' : '+'}</span>
            </button>
            <div className={`content ${active && 'active'}`}>
                <p>{props.text}</p>
                <p><a href="#"> Check if you're a British citizen</a>{` on GOV.UK.`}</p>
                <hr></hr>
                <button onClick={toggle} className='close-btn'>Close</button>
            </div>
        </div>
    )
}

export default Accordion;