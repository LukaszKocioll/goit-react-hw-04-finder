import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.imageURL} alt={this.props.alt} onClick={this.props.onClick} />
      </li>
    );
  }
}

export default ImageGalleryItem;
