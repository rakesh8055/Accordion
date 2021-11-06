const Accordion = () => {
    return(
        <div className='wrapper'>
            <button>
                <h4>Title</h4>
                <span>+</span>
            </button>
            <div className='content'>
                <p>Content</p>
                <hr></hr>
                <button>Close</button>
            </div>
        </div>
    )
}

export default Accordion;