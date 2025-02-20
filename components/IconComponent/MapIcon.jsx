const IconComponent = ({ className = "", stroke = "#9b9b9b", ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.275 21.995"
            className={className}
            {...props}
        >
            <g transform="translate(-2.362 -1)">
                <path
                    d="M12,13.43a3.12,3.12,0,1,0-3.12-3.12A3.12,3.12,0,0,0,12,13.43Z"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                />
                <path
                    d="M3.62,8.49C5.59-.17,18.42-.16,20.38,8.5c1.15,5.08-2.01,9.38-4.78,12.04a5.193,5.193,0,0,1-7.21,0C5.63,17.88,2.47,13.57,3.62,8.49Z"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                />
            </g>
        </svg>
    );
};

export default IconComponent;
