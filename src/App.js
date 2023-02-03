import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Cremation from './views/cremation/Cremation';
import Schedule from './schedule/Schedule';
import Examenes from './examenes/Examenes';
import Nav from './nav/Nav';
import Certificate from './views/certificate/Certificate';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/cremation' element={<Cremation />}/>  
        <Route path='/schedule' element={<Schedule />}/>  
        <Route path='/examenes' element={<Examenes />}/>  
        <Route path='/certificate' element={<Certificate />}/>  
      </Routes>
    </div>
  );
}

export default App;
