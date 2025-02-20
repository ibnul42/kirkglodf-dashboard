const IconComponent = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23.672 17.824"
        className={className}
        {...props}
      >
        <path
          d="M14.637,5.911c2.1-1.665,4.92-3.277,5.454-2.7.881.946.806,9.959,0,10.819-.49.533-3.33-1.078-5.454-2.733"
          transform="translate(1.948 0.299)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1,8.912C1,2.977,2.971,1,8.887,1s7.886,1.977,7.886,7.912-1.97,7.912-7.886,7.912S1,14.845,1,8.912Z"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fillRule="evenodd"
        />
      </svg>
    );
  };
  
  export default IconComponent;
  