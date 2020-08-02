import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import MyGallery from './MyGallery';
import Events from './Events';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./FontAwesomeIcons";



function App() {
  return (
    
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={MyGallery} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
