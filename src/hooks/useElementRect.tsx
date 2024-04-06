"use client"
import { useState, useEffect, RefObject, useMemo } from 'react';
import { useDebounce } from './useDebounce';
import { useWindowEvent } from './useWindowEvent';

const useElementRect = (ref: RefObject<HTMLDivElement>) => {
  const initialRect = useMemo(() => ref.current ? ref.current.getBoundingClientRect() : { x: 0, y: 0, height: 0, width: 0, bottom: 0, left: 0, right: 0, top: 0, toJSON:()=> {}}, [ref]);
  
  useWindowEvent('resize', () => calculateTopPosition);
  
  const [rect, setRect] = useState<DOMRect>(initialRect);
  
  const calculateTopPosition = () => {
    if (ref.current) {
      const rectangle = ref.current.getBoundingClientRect();
      setRect(rectangle);
    }
  };

  useEffect(() => {
    if (typeof window == "undefined") return
    calculateTopPosition();
  }, [ref]);

  return rect;
};

export default useElementRect;