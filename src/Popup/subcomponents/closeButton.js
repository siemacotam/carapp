import React from 'react';

export const closeButton = (setIsOpen) => {
    return <button
    className="popup__button"
    onClick={() => {
      setIsOpen(false);
    }}
  >
    x
  </button>
}