"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoaderWrapper() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        const isFirstLoad = sessionStorage.getItem("firstLoadDone");

        if (!isFirstLoad) {
            sessionStorage.setItem("firstLoadDone", "true");
            if (document.readyState === "complete") {
                setLoading(false);
            } else {
                window.addEventListener("load", handleLoad);
            }
        } else {
            setLoading(false);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (!loading) return null; // Hide loader once page is fully loaded

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="relative w-24 h-24">
                <Image src="/assets/logo.png" fill alt="Logo" className="animate-spin-slow" />
            </div>
        </div>
    );
}
