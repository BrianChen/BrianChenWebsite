import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <div className="logo">Brian Chen</div>
        <ul className="header-links">
          <li><a href="#about-section">About Me</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#gallery-section">Gallery</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;
