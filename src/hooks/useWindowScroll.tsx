"use client"

import { useState, useEffect } from 'react';
import * as React from 'react';
const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    if(typeof window == "undefined") return
    setScrollPosition({ x: window?.scrollX, y: window?.scrollY });
  };

  useEffect(() => {
    if(typeof window == "undefined") return

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useWindowScroll;