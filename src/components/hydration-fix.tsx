'use client';

import { useEffect } from 'react';

/**
 * Component to fix hydration mismatches caused by browser extensions
 * that inject attributes like bis_skin_checked, data-darkreader-*, etc.
 */
export function HydrationFix() {
  useEffect(() => {
    // Remove attributes added by browser extensions after hydration
    const removeExtensionAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]');
      elements.forEach((el) => {
        el.removeAttribute('bis_skin_checked');
      });
    };

    // Run after initial render
    removeExtensionAttributes();

    // Also observe for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
          (mutation.target as Element).removeAttribute('bis_skin_checked');
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['bis_skin_checked'],
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
