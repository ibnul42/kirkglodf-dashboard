const IconComponent = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.406 25.406"
            className={className}
            {...props}
        >
            <g transform="translate(-0.5 -0.5)">
                <path
                    d="M11.8,18.106a6.3,6.3,0,1,0-6.3-6.3A6.3,6.3,0,0,0,11.8,18.106Z"
                    transform="translate(1.4 1.4)"
                    fill="none"
                    stroke={stroke}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <path
                    d="M21.2,21.2l-.146-.146m0-15.707L21.2,5.2ZM5.2,21.2l.146-.146Zm8-19.112v0Zm0,22.316v0ZM2.09,13.2h0Zm22.316,0h0ZM5.35,5.35,5.2,5.2Z"
                    fill="none"
                    stroke={stroke}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                />
            </g>
        </svg>
    );
};

export default IconComponent;
