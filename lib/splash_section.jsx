import React from 'react';

class SplashSection extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="splash-section">
        <img className="photo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485902385/Pic_nxhczh.jpg"></img>
        <h1>Hello, I'm Brian!</h1>
        <h1>Software Developer, Electrical Engineer, and travel enthusiast.</h1>
      </div>
    )
  }
}

export default SplashSection;
