import React from 'react';

const FloatingIcon = ({ Icon, delay, duration, x, y }) => (
  <div
    className="absolute text-amber-600 opacity-20"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    }}
  >
    <Icon size={24} />
  </div>
);

export default FloatingIcon;