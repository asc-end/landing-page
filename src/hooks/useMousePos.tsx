"use client"

import { useState, useEffect } from 'react';
import * as React from 'react';
const useMousePos = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if(typeof window == "undefined") return

    const updateMousePos = (event:any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePos);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
    };
  }, []);

  return mousePos;
};

export default useMousePos;