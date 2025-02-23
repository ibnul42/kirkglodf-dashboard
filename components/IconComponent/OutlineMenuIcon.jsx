const OutlineMenuIcon = ({ className = "", stroke = "#31ed93", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.175 13.912" className={className}
            {...props}>
            <g id="Group_461" data-name="Group 461" transform="translate(0.75 0.75)">
                <line id="Line_10" data-name="Line 10" x2="4.892" transform="translate(9.784)" fill="none" stroke={stroke} stroke-linecap="round" strokeWidth="1.5" />
                <line id="Line_11" data-name="Line 11" x2="14.675" transform="translate(0 6.206)" fill="none" stroke={stroke} stroke-linecap="round" strokeWidth="1.5" />
                <line id="Line_12" data-name="Line 12" x2="5.707" transform="translate(0 12.412)" fill="none" stroke={stroke} stroke-linecap="round" strokeWidth="1.5" />
            </g>
        </svg>

    );
};

export default OutlineMenuIcon;
