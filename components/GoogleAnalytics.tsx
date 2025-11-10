'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

export function GoogleAnalytics() {
  const gaId = 'G-68TYQH732Q';

  return <NextGoogleAnalytics gaId={gaId} />;
}
