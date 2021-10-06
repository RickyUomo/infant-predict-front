import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Home from './components/Home';
import Form from './components/Form';
import Visualize from './components/Visualize'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);

      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });



  return (
    <Router>
      <div>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tool' component={Form} />
          <Route exact path='/data' component={Visualize} />
        </Switch>

        <footer className="w-full bg-gray-200 p-2 bottom-0">
          <Footer />
        </footer>
      </div>
    </Router>

  );
}

export default App;
