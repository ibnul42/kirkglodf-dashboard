const SettingsIcon = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.75 21.678"
        className={className}
        {...props}
      >
        <g transform="translate(-2 -1.023)">
          <path
            d="M3,9.013V14.7c0,2.091,0,2.091,1.972,3.422L10.4,21.26a3.259,3.259,0,0,0,2.958,0l5.424-3.136c1.972-1.331,1.972-1.331,1.972-3.412v-5.7c0-2.081,0-2.081-1.972-3.412L13.354,2.465a3.259,3.259,0,0,0-2.958,0L4.972,5.6C3,6.932,3,6.932,3,9.013Z"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M11.958,14.917A2.958,2.958,0,1,0,9,11.958,2.958,2.958,0,0,0,11.958,14.917Z"
            transform="translate(-0.083 -0.096)"
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
  
  export default SettingsIcon;
  