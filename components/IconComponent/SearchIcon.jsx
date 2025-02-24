const SearchIcon = ({ className = "", stroke = "#d4d4d4", ...props }) => {
    return (
        <svg id="Group_460" data-name="Group 460" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.207 17.207" className={className}
        {...props}>
        <g id="Ellipse_47" data-name="Ellipse 47" fill="none" stroke={stroke} strokeWidth="1">
          <circle cx="8" cy="8" r="8" stroke="none"/>
          <circle cx="8" cy="8" r="7.5" fill="none"/>
        </g>
        <line id="Line_9" data-name="Line 9" x2="3" y2="3" transform="translate(13.5 13.5)" fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="1"/>
      </svg>
    );
};

export default SearchIcon;
