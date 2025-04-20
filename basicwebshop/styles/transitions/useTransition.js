// useTransition.js

import { useState, useEffect } from "react";

export default function useTransition(initialState = false, duration = 500) {
  const [state, setState] = useState(initialState);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (state) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, duration);
    }
  }, [state, duration]);

  return [state, setState, isTransitioning];
}
