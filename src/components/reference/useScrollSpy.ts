import { useCallback, useEffect, useMemo, useState } from 'react';
import { HEADER_METRICS_EVENT } from '../useHeaderHeightCssVar';
import { getTocScrollOffsetPx, markTocTarget } from './scroll';

type UseScrollSpyOptions = Pick<IntersectionObserverInit, 'rootMargin' | 'threshold'>;

export function useScrollSpy(sectionIds: string[], options?: UseScrollSpyOptions) {
  const [activeSectionId, setActiveSectionId] = useState<string>(sectionIds[0] ?? '');
  const [offsetPx, setOffsetPx] = useState(() => getTocScrollOffsetPx());

  const idsKey = useMemo(() => sectionIds.join('|'), [sectionIds]);
  const rootMargin = options?.rootMargin ?? `-${offsetPx}px 0px -70% 0px`;
  const threshold = options?.threshold ?? [0, 0.1, 0.25, 0.5, 1];

  const refreshOffset = useCallback(() => {
    setOffsetPx(getTocScrollOffsetPx());
  }, []);

  useEffect(() => {
    window.addEventListener(HEADER_METRICS_EVENT, refreshOffset);
    window.addEventListener('resize', refreshOffset, { passive: true });
    return () => {
      window.removeEventListener(HEADER_METRICS_EVENT, refreshOffset);
      window.removeEventListener('resize', refreshOffset);
    };
  }, [refreshOffset]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    for (const element of elements) markTocTarget(element);

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (best?.target?.id) {
          setActiveSectionId(best.target.id);
        }
      },
      { rootMargin, threshold }
    );

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, [idsKey, rootMargin, threshold, sectionIds]);

  return [activeSectionId, setActiveSectionId] as const;
}
