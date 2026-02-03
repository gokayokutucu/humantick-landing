import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isAtScrollTarget, scrollToId } from './scroll';

export function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash?.startsWith('#') ? location.hash.slice(1) : '';
    if (!id) return;

    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        if (isAtScrollTarget(id)) return;
        scrollToId(id, 'smooth');
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [location.pathname, location.hash]);

  return null;
}

