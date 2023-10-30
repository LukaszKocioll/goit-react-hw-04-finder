import React from 'react';
import Button from './Button';
import Lightbox from './Lightbox';


class ImageGallery extends React.Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isLightboxOpen: false,
    lightboxImageIndex: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState(
        {
          images: [],
        },
        () => this.fetchImages(this.props.query)
      );
    }
  }

  fetchImages = (query) => {
    const apiKey = '39359840-efcb8fae7f1af4010e3363a8b';
    const perPage = 12;
    const { page } = this.state;
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    this.setState({ isLoading: true });

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

  openLightbox = (index) => {
    this.setState({
      isLightboxOpen: true,
      lightboxImageIndex: index,
    });
  };

  closeLightbox = () => {
    this.setState({
      isLightboxOpen: false,
      lightboxImageIndex: null,
    });
  };

  render() {
    const { images, isLoading, error, isLightboxOpen, lightboxImageIndex } = this.state;

    return (
      <div>
        <ul className="gallery">
          {images.map((image, index) => (
            <li key={image.id} className="gallery-item">
              <img
                src={image.webformatURL}
                alt=""
                className="gallery-item-image"
                onClick={() => this.openLightbox(index)}
              />
            </li>
          ))}
        </ul>

        {isLightboxOpen && (
          <Lightbox
            image={images[lightboxImageIndex]}
            onClose={this.closeLightbox}
          />
        )}

        <Button onClick={() => this.fetchImages(this.props.query)} />

        {error && <div>Wystąpił błąd: {error.message}</div>}
        {isLoading && <div>Ładowanie...</div>}
      </div>
    );
  }
}

export default ImageGallery;
