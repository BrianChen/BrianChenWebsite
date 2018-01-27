import React from 'react';
import Lightbox from 'react-images';

class Gallery extends React.Component {

  constructor(props) {
    super(props);

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.state = {
      lightboxIsOpen: false,
      currentImageNumber: null
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
    return imgs;
  }

  render() {
    return (
      <div id="gallery-section" className="sections">
        <h1 className="section-title">Explore, Discover and Learn</h1>
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
    let imageNumber = this.state.currentImageNumber;
    if (imageNumber !== null) {
      this.setState({
        currentImageNumber: imageNumber -= 1
      });
    }
  }

  gotoNext() {
    let imageNumber = this.state.currentImageNumber;
    if (imageNumber !== null) {
      this.setState({
        currentImageNumber: imageNumber += 1
      });
    }
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
      currentImageNumber: null
    });
  }
}

export default Gallery;
