import { useLayoutEffect } from 'react';

export const HEADER_METRICS_EVENT = 'htick:header-metrics';

export function useHeaderHeightCssVar(headerElementId = 'site-header') {
  useLayoutEffect(() => {
    const header = document.getElementById(headerElementId);
    if (!header) return;

    const root = document.documentElement;

    const update = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      root.style.setProperty('--header-height', `${height}px`);
      window.dispatchEvent(new Event(HEADER_METRICS_EVENT));
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(header);
    window.addEventListener('resize', update, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [headerElementId]);
}

