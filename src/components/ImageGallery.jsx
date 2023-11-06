import React from 'react';
import Button from './Button';
import Lightbox from './Lightbox';
import { useImageGallery } from './Hooks/useImageGallery';
import { useLightbox } from './Hooks/useLightbox';

const ImageGallery = ({ query }) => {
  const {
    images,
    isLoading,
    error,
    fetchImages,
  } = useImageGallery(query);

  const {
    isLightboxOpen,
    lightboxImageIndex,
    openLightbox,
    closeLightbox,
  } = useLightbox();

  return (
    <div>
      <ul className="gallery">
        {images.map((image, index) => (
          <li key={image.id} className="gallery-item">
            <img
              src={image.webformatURL}
              alt=""
              className="gallery-item-image"
              onClick={() => openLightbox(index)}
            />
          </li>
        ))}
      </ul>

      {isLightboxOpen && (
        <Lightbox image={images[lightboxImageIndex]} onClose={closeLightbox} />
      )}

      <Button onClick={() => fetchImages(query)} />

      {error && <div>Wystąpił błąd: {error.message}</div>}
      {isLoading && <div>Ładowanie...</div>}
    </div>
  );
};

export default ImageGallery;
