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
import Visualize from './components/Visualize';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const debounce = (fn, ms) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(fn, ms);
    }
  };

  const hideMenu = () => {
    if (windowWidth > 768 && isOpen) setIsOpen(false);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleResize = debounce(hideMenu, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
};

export default App;
