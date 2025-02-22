const PrivacyIcon = ({ className = "", stroke = "#fff", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.305 20.361" className={className}
            {...props}>
            <g id="Group_678" data-name="Group 678" transform="translate(-2.34 -1.24)">
                <path id="Path_1013" data-name="Path 1013" d="M19.886,10.6a10.861,10.861,0,0,1-7.917,10.189,1.848,1.848,0,0,1-.961,0A10.861,10.861,0,0,1,3.09,10.6V6.458A2.264,2.264,0,0,1,4.4,4.517L9.65,2.368a4.889,4.889,0,0,1,3.685,0l5.25,2.149a2.282,2.282,0,0,1,1.31,1.942Z" transform="translate(0)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path id="Path_1014" data-name="Path 1014" d="M11.885,12.27A1.885,1.885,0,1,0,10,10.385,1.885,1.885,0,0,0,11.885,12.27Z" transform="translate(-0.397 -0.373)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1015" data-name="Path 1015" d="M12,12.5v2.828" transform="translate(-0.512 -0.603)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            </g>
        </svg>

    );
};

export default PrivacyIcon;
