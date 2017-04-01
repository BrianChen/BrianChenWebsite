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

  setImages() {
    let imgs = [];

    for (let i=1; i < 11; i++) {
      let currentSrc = `images/picture${i}.jpg`;
      imgs.push(<img className="gallery-img" src={currentSrc} key={currentSrc}></img>);
    }
    console.log(imgs);
    return imgs;
  }

  render() {
    return (
      <div id="gallery" className="sections">
        <h1>Code, Travel, Sleep and Repeat</h1>
        <div className="imgs-container">
          {this.setImages()}
        </div>
      </div>
    );
  }
}

export default Gallery;
