import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="toast show">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
