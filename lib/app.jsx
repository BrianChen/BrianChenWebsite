import React from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './splash/splash_section';
import Projects from './projects/projects';
import Footer from './footer/footer';
import About from './about/about';
import Gallery from './gallery/gallery';

const Header = (
  <div id="header">
    <Link className="logo" to="/">Brian Chen</Link>
    <i className="fa fa-bars" aria-hidden="true"></i>
    <ul className="header-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </ul>
  </div>
);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        {Header}

        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/gallery" component={Gallery}/>
      </div>
    );
  }
}

export default App;
