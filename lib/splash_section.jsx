import React from 'react';

class SplashSection extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="splash-section">
        <img className="photo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485902385/Pic_nxhczh.jpg"></img>
        <h1>Hey, I'm Brian!</h1>
      </div>
    )
  }
}

export default SplashSection;
