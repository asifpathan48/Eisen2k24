// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Preloader from './Components/Preloaders/Preloader';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulating content loading with a delay (you can replace this with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="App">
      {contentLoaded ? ( // Render the content only if loading is complete
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
