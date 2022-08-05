import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/home';
import DetailPage from './pages/detailPage';

function App() {




  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className='logo'>Klob</h1>
          <p>Buat Lowongan</p>
        </header>
      <div>
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail-lowongan-perkerjaan/:jobVacancyCode" element={<DetailPage />} />
        </Routes>

        </div>
        
      
      </div>
      </Router>
    
  );
}

export default App;
