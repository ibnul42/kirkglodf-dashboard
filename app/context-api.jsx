'use client';

import React, { createContext, useContext, useState } from "react";

const HomeContext = createContext({
    selectedCamera: "Study Room",
    setSelectedCamera: () => { },
});

export const HomeContextProvider = ({ children }) => {
    const [selectedCamera, setSelectedCamera] = useState("Living Room");

    const value = {
        selectedCamera,
        setSelectedCamera,
    };

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => useContext(HomeContext);
