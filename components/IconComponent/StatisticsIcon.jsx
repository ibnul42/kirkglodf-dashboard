const IconComponent = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21.432 21.432"
        className={className}
        {...props}
      >
        <g transform="translate(-1 -1)">
          <path
            d="M2,2V18.517a2.911,2.911,0,0,0,2.915,2.915H21.432"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="M5,16.716l4.46-5.208a1.939,1.939,0,0,1,2.847-.107l.923.923a1.947,1.947,0,0,0,2.847-.107L20.545,7"
            transform="translate(-0.085 -0.142)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  };
  
  export default IconComponent;
  