'use client'
import { useState } from "react";
import cn from "classnames";

export default function ToggleSwitch({ checked, onChange, bgColor="#ffffff" }) {
    const [isOn, setIsOn] = useState(checked || false);

    const handleToggle = () => {
        setIsOn(!isOn);
        if (onChange) {
            onChange(!isOn);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className="relative w-14 h-8 rounded-full flex items-center transition-all duration-300"
            style={{
                backgroundColor: bgColor
            }}
        >
            <div
                className={cn(
                    "absolute w-6 h-6 rounded-full shadow-md transform transition-all duration-300",
                    isOn ? "translate-x-[26px] bg-[#31ED93]" : "translate-x-1 bg-[#9B9B9B]"
                )}
            />
        </button>
    );
}
