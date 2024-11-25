// SortModal.js
import React from 'react';
// import './SortModal.css';

const SortModal = ({ handleClose, handleSortBy }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sort by</h2>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="CPU Percent low to high"
            onChange={() => handleSortBy('CPU Percent', 'asc')}
          />
          CPU Percent low to high
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="CPU Percent high to low"
            onChange={() => handleSortBy('CPU Percent', 'desc')}
          />
          CPU Percent high to low
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="Memory Usage (MB) low to high"
            onChange={() => handleSortBy('Memory Usage (MB)', 'asc')}
          />
          Memory Usage (MB) low to high
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="Memory Usage (MB) high to low"
            onChange={() => handleSortBy('Memory Usage (MB)', 'desc')}
          />
          Memory Usage (MB) high to low
        </label>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default SortModal;
