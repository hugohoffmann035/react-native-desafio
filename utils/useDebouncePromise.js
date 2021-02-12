import {Provider} from 'react-redux';

import {useRef} from 'react';

export function useDebouncePromise(fn, delay) {
  let timeoutRef = useRef(null);

  function handler(...params) {
    return new Promise((resolve, reject) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(async () => {
        try {
          const response = await fn(...params);
          resolve(response);
        } catch (e) {
          reject(e);
        }
      }, delay);
    });
  }
  return handler;
}
