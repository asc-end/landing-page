"use client"
import { useState, useEffect } from 'react';

const useElementTopPosition = (ref:any) => {
  const [topPosition, setTopPosition] = useState(0);

  const calculateTopPosition = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      setTopPosition(top);
    }
  };

  useEffect(() => {
    console.log(window)
    if(typeof window == "undefined") return
    calculateTopPosition();
    window.addEventListener('resize', calculateTopPosition);
    return () => {
      window.removeEventListener('resize', calculateTopPosition);
    };
  }, [ref]);

  return topPosition;
};

export default useElementTopPosition;