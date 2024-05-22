import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import SculptureDetail from './components/SculptureDetail';
import './App.css';
import sculptures from './data/sculptures';  // Importing sculptures data

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage sculptures={sculptures} />} />
          <Route path="/sculpture/:id" element={<SculptureDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
