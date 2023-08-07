import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
