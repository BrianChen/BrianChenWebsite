import React from 'react';
import SplashSection from './splash_section';
import Projects from './projects';
import Footer from './footer';
import About from './about';

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
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
