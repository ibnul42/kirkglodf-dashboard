const ModifyIcon = ({ className = "", stroke = "#fff", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.807 18.382" className={className}
            {...props}>
            <g id="Group_680" data-name="Group 680" transform="translate(-2.25 -1.4)">
                <path id="Path_1017" data-name="Path 1017" d="M11.874,3.385l-6.982,7.39a2.593,2.593,0,0,0-.57,1.216l-.315,2.755A1.3,1.3,0,0,0,5.6,16.251l2.738-.468a2.442,2.442,0,0,0,1.182-.638L16.5,7.756c1.208-1.276,1.752-2.73-.128-4.507C14.5,1.488,13.081,2.109,11.874,3.385Z" transform="translate(-0.149 0)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1018" data-name="Path 1018" d="M11.89,5.05a5.209,5.209,0,0,0,4.635,4.379" transform="translate(-1.33 -0.432)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1019" data-name="Path 1019" d="M3,22H18.307" transform="translate(0 -2.969)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            </g>
        </svg>

    );
};

export default ModifyIcon;
