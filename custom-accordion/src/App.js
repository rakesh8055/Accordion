import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import AppContainer from './components/app-container/AppContainer';

function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<AppContainer type={`Public`}/>}/>
          <Route path="/adviser" element={<AppContainer type={`Adviser`}/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
