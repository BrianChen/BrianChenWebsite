import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="footer" className="sections">
        <h1>Let's get in touch</h1>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/brian-chen-b49a4553">
            <img className="footer-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485839056/In-2CRev-121px-R_fyfynz.png"></img>
          </a>
          <a href="https://github.com/BrianChen">
            <img className="footer-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485838792/GitHub-Mark-120px-plus_yncggy.png"></img>
          </a>
          <a href="mailto:brianc.cb@gmail.com?Subject=Hello">
            <img className="footer-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485839432/logo_gmail_128px_qkqq96.png"></img>
          </a>
          <a href="mailto:brianc.cb@gmail.com?Subject=Hello">
            <img className="footer-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485840169/resume-icon_k4kntx.png"></img>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;
