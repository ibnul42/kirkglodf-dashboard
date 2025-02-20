const IconComponent = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22.318 22.31"
        className={className}
        {...props}
      >
        <g transform="translate(1.011 0.99)">
          <path
            d="M18.623,12.45c2.725,0,3.857-1.048,2.851-4.485a7.609,7.609,0,0,0-4.988-4.988C13.048,1.97,12,3.1,12,5.827V8.845c0,2.557,1.048,3.605,3.144,3.605Z"
            transform="translate(-1.519 -2.614)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M20.864,15.213A9.527,9.527,0,1,1,9.608,4.01"
            transform="translate(-1.999 -2.547)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  };
  
  export default IconComponent;
  