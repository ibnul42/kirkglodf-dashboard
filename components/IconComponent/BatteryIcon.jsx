const BatteryIcon = ({ className = "", stroke = "#31ed93", ...props }) => {
    return (
        <svg id="Battery" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.141 9.783" className={className}
            {...props}>
            <path id="Tip" d="M23,3.5a1.907,1.907,0,0,1,1.545,1.8A1.907,1.907,0,0,1,23,7.1Z" transform="translate(-2.404 -0.411)" fill-rule="evenodd" />
            <rect id="Fill" width="15.447" height="5.664" rx="1" transform="translate(2.06 2.06)" />
            <g id="Outline" transform="translate(0 0)" fill="none" stroke="#000" stroke-width="1" opacity="0.4">
                <rect width="19.567" height="9.783" rx="2.4" stroke="none" />
                <rect x="0.5" y="0.5" width="18.567" height="8.783" rx="1.9" fill="none" />
            </g>
        </svg>


    );
};

export default BatteryIcon;
