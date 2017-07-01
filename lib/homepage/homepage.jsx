import React from 'react';
import Header from '../header/header';
import SplashSection from '../splash/splash_section';
import Projects from '../projects/projects';
import Footer from '../footer/footer';
import About from '../about/about';
import Gallery from '../gallery/gallery';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <SplashSection/>
        <About/>
        <Projects/>
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
