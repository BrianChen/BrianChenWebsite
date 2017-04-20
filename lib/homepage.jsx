import React from 'react';
import Header from './header';
import SplashSection from './splash_section';
import Projects from './projects';
import Footer from './footer';
import About from './about';
import Gallery from './gallery';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
