'use client';
import { useEffect, useState } from 'react';

export default function SmartClientLoader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Helper to load a script
    function loadScript(src: string) {
      return new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
      });
    }
    // Helper to load a stylesheet
    function loadStyle(href: string) {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }

    // Set global config (use 'as any' only for the assignment)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isomorphicDir = "/isomorphic/";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isc = (window as any).isc || {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isc_useSimpleNames = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isc_useStandardSetTimeout = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isc_logIsDebugEnabled = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).isc_logIsInfoEnabled = true;

    // Load styles first
    loadStyle('/isomorphic/skins/Shiva/skin_styles.css');

    // Load scripts in order
    (async () => {
      await loadScript('/isomorphic/system/modules/ISC_Core.js');
      await loadScript('/isomorphic/system/modules/ISC_Foundation.js');
      await loadScript('/isomorphic/system/modules/ISC_Containers.js');
      await loadScript('/isomorphic/system/modules/ISC_Grids.js');
      await loadScript('/isomorphic/system/modules/ISC_Forms.js');
      await loadScript('/isomorphic/system/modules/ISC_DataBinding.js');
      await loadScript('/isomorphic/skins/Shiva/load_skin.js');
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return <div style={{textAlign: 'center', marginTop: '20vh'}}>Loading SmartClient UI…</div>;
  }

  return <>{children}</>;
}
