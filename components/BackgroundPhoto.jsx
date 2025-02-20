import React from 'react';

/**
 * @param {Object} props
 * @param {string} props.src - Background image URL
 * @param {React.ReactNode} [props.children] - Child elements
 * @param {React.CSSProperties} [props.style] - Inline styles
 */

const BackgroundPhoto = ({ src, children, style }) => {
  return (
    <div className="w-full h-screen"
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
     ...style,
    }}
    >
      {children}
    </div>
  );
};

export default BackgroundPhoto;