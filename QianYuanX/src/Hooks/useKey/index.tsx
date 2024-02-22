import { useLayoutEffect } from 'react';
export default function useKey(code: string, callback: () => void) {
  const listener = (e: KeyboardEvent) => {
    if (e.code === code) callback();
  };
  useLayoutEffect(() => {
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
}