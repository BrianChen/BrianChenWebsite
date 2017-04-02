import React from 'react';
import Lightbox from 'react-images';

class Gallery extends React.Component {

  constructor(props) {
    super(props);

    this.closeLightbox = this.closeLightbox.bind(this);
    this.state = {
      lightboxIsOpen: false,
      currentImageNumber: 0
    }
  }

  handleClick(currentImageNumber) {
    this.setState({
      lightboxIsOpen: true,
      currentImageNumber: currentImageNumber
    });
  }

  setImages() {
    let imgs = [];

    for (let i=0; i < 10; i++) {
      let currentSrc = `images/picture${i}.jpg`;
      imgs.push(<img className="gallery-img" src={currentSrc} onClick={this.handleClick.bind(this, i)} key={i}></img>);
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
        <Lightbox
          images={[{src:'images/picture0.jpg'}, {src:'images/picture1.jpg'}, {src:'images/picture2.jpg'}, {src:'images/picture3.jpg'}, {src:'images/picture4.jpg'}, {src:'images/picture5.jpg'}, {src:'images/picture6.jpg'}, {src:'images/picture7.jpg'}, {src:'images/picture8.jpg'}, {src:'images/picture9.jpg'}]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          currentImage={this.state.currentImageNumber}
          backdropClosesModal={true}
        />
      </div>
    );
  }

  gotoPrevious() {

  }

  gotoNext() {

  }

  closeLightbox() {
    this.setState({lightboxIsOpen: false});
  }
}

export default Gallery;
