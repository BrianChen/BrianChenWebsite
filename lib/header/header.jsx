import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <ul className="header-links">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Gallery</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Header;
