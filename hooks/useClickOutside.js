'use client'
import { useEffect, useRef } from "react";

const useClickOutside = (callback, excludedRef = null) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current && !ref.current.contains(event.target) &&
        !(excludedRef?.current && excludedRef.current.contains(event.target))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback, excludedRef]);

  return ref;
};

export default useClickOutside;
