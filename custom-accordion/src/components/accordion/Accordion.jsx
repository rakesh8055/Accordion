import { useEffect, useState } from 'react';
import './Accordion.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { useNavigate } from 'react-router';

const Accordion = (props) => {
    const [active, setActive] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if(!auth.currentUser) {
            if(props.type === 'Adviser') {
                navigate('/login');
            } else {
                navigate('/');
            }
        }
    },[])

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
                {props.type === 'Adviser' && <span data-testid='reference-btn' className='reference-btn'>Reference</span>}
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