import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contactus';
import Signup from './pages/signup';

function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </Router>
  );
}

export default App
