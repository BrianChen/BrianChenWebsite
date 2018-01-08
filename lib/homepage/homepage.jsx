import React from 'react';
import Header from '../header/header';
import SplashSection from '../splash/splash_section';
import Projects from '../projects/projects';
import Footer from '../footer/footer';
import About from '../about/about';
import Gallery from '../gallery/gallery';
import Experience from '../experience/experience';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <SplashSection/>
        <About/>
        <Experience/>
        <Projects/>
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
