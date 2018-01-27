import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Particles from 'react-particles-js';
import { particlesConfig } from './particlesjs-config-stars';

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
          <h2>I'm <span>Brian Chen</span>, a detail oritented developer with a passion for problem solving. Using my skills to bring ideas to life.</h2>
          <h2>I am a             <ReactRotatingText
                        className="rotating-text"
                        items={['Full Stack Developer!', 'Software Engineer!', 'Travel Enthusiast!']}
                        color={'#ffcc66'}
                        pause={2000}
                      />
          </h2>
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
