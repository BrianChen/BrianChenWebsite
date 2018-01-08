import React from 'react';

class SplashSection extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="splash-section">
        <img className="photo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485902385/Pic_nxhczh.jpg"></img>
        <div className="splash-text">
          <h1>Hello, I'm Brian!</h1>
          <h1 className="splash-description">Software Developer, Electrical Engineer, and travel enthusiast.</h1>
        </div>
      </div>
    )
  }
}

export default SplashSection;
