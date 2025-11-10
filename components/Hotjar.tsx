'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    hj: any;
    _hjSettings: any;
  }
}

export function Hotjar() {
  useEffect(() => {
    // Hotjar Tracking Code
    const initHotjar = () => {
      (window as any).hj = (window as any).hj || function() {
        ((window as any).hj.q = (window as any).hj.q || []).push(arguments);
      };
      (window as any)._hjSettings = { hjid: 6571893, hjsv: 6 };

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://static.hotjar.com/c/hotjar-${(window as any)._hjSettings.hjid}.js?sv=${(window as any)._hjSettings.hjsv}`;
      document.head.appendChild(script);
    };

    initHotjar();
  }, []);

  return null;
}
