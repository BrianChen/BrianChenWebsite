import React from 'react';

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    function myFunction() {
      console.log(this);
    }
    myFunction();
  }

  render() {
    return (
      <div id="gallery">
        <div className="click1" onClick={this.handleClick}>
          click me
        </div>
      </div>
    );
  }
}

export default Gallery;
