import { useState } from 'react';
import './App.scss';
import Accordion from './components/accordion/Accordion';
import AC_DATA from './data/data';

function App() {
  const [clicked, setClicked] = useState(0);

  const handleClick = (index) => setClicked(index);

  return (
    <div className="App">
      <div className='page-header'>
        <h3 data-testid='page-header'>{'Adviser'}</h3>
      </div>
      { AC_DATA.map((item, index) => (
        <Accordion data-testid={`accordion-${index}`} key={index} 
          type={'Adviser'} 
          title={item.title} 
          text={item.text}
          clicked={clicked}
          index={index}
          handleClick={() => handleClick(index)}/>
      ))
      }
    </div>
  );
}

export default App;
