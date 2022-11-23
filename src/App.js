import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import NewNavBar from './components/NewNavBar';
import Home from './components/Home';
import Form from './components/Form';
import Visualize from './components/Visualize';

function App() {
  return (
    <Router>
      <div>
        <NewNavBar />
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
