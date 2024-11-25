import React from 'react';
import './modal.css'; // Import CSS for modal styling

const Modal = ({ onClose, onSubmit, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;