import { useState } from 'react';

export function useLightbox() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  const openLightbox = (index) => {
    setIsLightboxOpen(true);
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImageIndex(null);
  };

  return { isLightboxOpen, lightboxImageIndex, openLightbox, closeLightbox };
}
