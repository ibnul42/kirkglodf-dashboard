const TemperatureIcon = ({ className = "", stroke = "#31ed93", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.799 63.068" className={className}
        {...props}>
            <g id="Group_186" data-name="Group 186" transform="translate(1.501 1.499)">
                <g id="Group_99" data-name="Group 99" transform="translate(-0.001 0.001)">
                    <g id="Group_98" data-name="Group 98" transform="translate(0)">
                        <path id="Subtraction_1" data-name="Subtraction 1" d="M0,44.45A15.623,15.623,0,0,1,9.785,30.029V6a6,6,0,0,1,6-6h.23a6,6,0,0,1,6,6v24.03A15.58,15.58,0,0,1,15.9,60.068,15.761,15.761,0,0,1,0,44.45Z" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                    <path id="Path_124" data-name="Path 124" d="M585.282,1410.948h4.807" transform="translate(-561.339 -1402.426)" fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
                    <path id="Path_125" data-name="Path 125" d="M585.282,1410.948h4.807" transform="translate(-561.339 -1393.466)" fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
                </g>
                <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="8.65" cy="8.548" rx="8.65" ry="8.548" transform="translate(7.248 35.817)" fill={stroke} />
                <line id="Line_5" data-name="Line 5" y1="17.345" transform="translate(15.898 21.362)" fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
            </g>
        </svg>

    );
};

export default TemperatureIcon;
