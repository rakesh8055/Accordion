import './Accordion.styles.scss';

const Accordion = (props) => {
    return(
        <div className='wrapper'>
            <button className='toggle-btn'>
                <h4>{props.title}</h4>
                <span>+</span>
            </button>
            <div className='content'>
                <p>{props.text}</p>
                <hr></hr>
                <button className='close-btn'>Close</button>
            </div>
        </div>
    )
}

export default Accordion;