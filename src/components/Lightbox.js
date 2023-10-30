import React from 'react';

class Lightbox extends React.Component {
  render() {
    const { image, onClose } = this.props;

    return (
      <div className="lightbox">
        <div className="lightbox-image-container">
          <img src={image.webformatURL} alt={image.tags} className="lightbox-image" />
        </div>
        <button onClick={onClose} className="lightbox-close-button">
          Close
        </button>
      </div>
    );
  }
}

export default Lightbox;
