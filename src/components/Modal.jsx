import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="Large Image" />
      </div>
    </div>
  );
};

export default Modal;
