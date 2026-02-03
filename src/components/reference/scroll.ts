function readCssPxVar(varName: string, fallbackPx: number) {
  if (typeof window === 'undefined') return fallbackPx;
  const raw = window.getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : fallbackPx;
}

export function getTocScrollOffsetPx() {
  const headerHeightPx = readCssPxVar('--header-height', 0);
  const gapPx = readCssPxVar('--toc-scroll-gap', 16);
  return headerHeightPx + gapPx;
}

export function markTocTarget(element: HTMLElement | null) {
  if (!element) return;
  element.dataset.tocTarget = 'true';
}

export function scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(id);
  if (!element) return;

  markTocTarget(element);

  const offsetPx = getTocScrollOffsetPx();
  const top = element.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior });
}

export function isAtScrollTarget(id: string) {
  if (typeof window === 'undefined') return true;
  const element = document.getElementById(id);
  if (!element) return true;

  const offsetPx = getTocScrollOffsetPx();
  const delta = element.getBoundingClientRect().top - offsetPx;
  return Math.abs(delta) < 2;
}

