const ContactIcon = ({ className = "", stroke = "#fff", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.305 17.59" className={className}
            {...props}>
            <g id="Group_672" data-name="Group 672" transform="translate(-1.25 -1.68)">
                <path id="Path_1005" data-name="Path 1005" d="M14.6,15.874H11.243L7.5,18.361a.838.838,0,0,1-1.3-.7v-1.79a3.969,3.969,0,0,1-4.2-4.2V6.631a3.969,3.969,0,0,1,4.2-4.2h8.4a3.969,3.969,0,0,1,4.2,4.2v5.042A3.969,3.969,0,0,1,14.6,15.874Z" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1006" data-name="Path 1006" d="M11.735,10.641v-.176a1.316,1.316,0,0,1,.706-1.118,1.288,1.288,0,0,0,.689-1.092,1.395,1.395,0,1,0-2.79,0" transform="translate(-1.332 -0.708)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path id="Path_1007" data-name="Path 1007" d="M12,13.75H12" transform="translate(-1.597 -1.808)" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
        </svg>

    );
};

export default ContactIcon;
