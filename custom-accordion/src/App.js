import './App.css';
import Accordion from './components/accordion/Accordion';
import AC_DATA from './data/data';

function App() {
  return (
    <div className="App">
      { AC_DATA.map((item) => (
        <Accordion title={item.title} text={item.text}/>
      ))
      }
    </div>
  );
}

export default App;
