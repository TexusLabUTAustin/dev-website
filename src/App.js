import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'; // Import the Home component
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Home /> {/* Render the Home component here */}
    </div>
  );
}

export default App;


