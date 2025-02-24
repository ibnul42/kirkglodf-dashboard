import React from 'react';

/**
 * @param {Object} props
 * @param {string} props.src - Background image URL
 * @param {React.ReactNode} [props.children] - Child elements
 * @param {React.CSSProperties} [props.style] - Inline styles
 * @param {number} [props.blur] - Blur intensity (in pixels)
 */

const BackgroundPhoto = ({ src, children, style, blur = 0 }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: `blur(${blur}px)`,
          transform: 'scale(1.05)', // Prevents edge cropping due to blur
          // ...style,
        }}
      />

      {/* Content on Top */}
      <div className="relative w-full h-full" style={{
        ...style
      }}>{children}</div>
    </div>
  );
};

export default BackgroundPhoto;
