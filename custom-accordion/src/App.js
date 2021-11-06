import './App.css';
import Accordion from './components/accordion/Accordion';
import AC_DATA from './data/data';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h3>Public</h3>
      </div>
      { AC_DATA.map((item) => (
        <Accordion title={item.title} text={item.text}/>
      ))
      }
    </div>
  );
}

export default App;
