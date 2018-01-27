import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Particles from 'react-particles-js';
import { particlesConfig } from './particlesjs-config-stars';
import Scrollchor from 'react-scrollchor';

class SplashSection extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id="splash-section" className="splash-section">
        <div className="splash-text">
          <h2>
            Hello! <i className="em em-rocket rocket-one"></i> <i className="em em-rocket"></i>
          </h2>
          <h2>I'm <span>Brian Chen</span>, a developer with a passion for problem solving. I enjoy learning new technology to bring ideas to life.</h2>
          <h2>I am a             <ReactRotatingText
                        className="rotating-text"
                        items={['Full Stack Developer!', 'Software Engineer!', 'Travel Enthusiast!']}
                        color={'#ffcc66'}
                        pause={2000}
                      />
          </h2>
        </div>
        <div className="learn-more">
          <Scrollchor
            to="#about-section"
            className="scroll-anchor"
          >
            <p>Learn more about what I do</p>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </Scrollchor>
        </div>
        <Particles
          className="particles-wrapper"
          canvasClassName="particles-canvas"
          params={particlesConfig}
        />
      </div>
    )
  }
}

export default SplashSection;
