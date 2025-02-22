const NotificationIcon = ({ className = "", stroke = "#fff", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.588 19.681" className={className}
            {...props}>
            <g id="Group_670" data-name="Group 670" transform="translate(-2.342 -1.25)">
                <path id="Path_1002" data-name="Path 1002" d="M12,6.44v3" transform="translate(-0.87 -0.434)" fill="none" stroke={stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1003" data-name="Path 1003" d="M11.148,2A6.007,6.007,0,0,0,5.139,8.009V9.9a4.685,4.685,0,0,1-.568,2.057L3.425,13.874a1.924,1.924,0,0,0,1.083,2.932,21.059,21.059,0,0,0,13.29,0,2,2,0,0,0,1.083-2.932l-1.146-1.913A4.718,4.718,0,0,1,17.167,9.9V8.009A6.044,6.044,0,0,0,11.148,2Z" transform="translate(0 0)" fill="none" stroke={stroke} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path id="Path_1004" data-name="Path 1004" d="M14.679,18.82a3,3,0,0,1-6.009,0" transform="translate(-0.544 -1.644)" fill="none" stroke={stroke} strokeMiterlimit="10" strokeWidth="1.5" />
            </g>
        </svg>

    );
};

export default NotificationIcon;
