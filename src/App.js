import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import TheoryPage from './components/TheoryPage';
import NetArtPage from './components/NetArtPage';
import DesignPage from './components/DesignPage';
import BlogPage from './components/BlogPage';
import PageNotFound from './components/PageNotFound';
import './App.css';
import sculptures from './data/sculptures';  // Importing sculptures data
import blogs from './data/blogs';
import designContent from './data/designContent';
import wireframes from './data/wireframes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/single-page-application" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage sculptures={sculptures} />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/netArt" element={<NetArtPage />} />
          <Route path="/design" element={<DesignPage designContent={designContent} wireframes={wireframes}/>} />
          <Route path="/blog" element={<BlogPage blogPosts={blogs}/>} />
          <Route component={PageNotFound} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
