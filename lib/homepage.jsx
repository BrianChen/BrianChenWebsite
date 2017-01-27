import React from 'react';
import SplashSection from './splash_section';
import Projects from './projects';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SplashSection/>
        <Projects/>
      </div>
    );
  }
}

export default Homepage;
