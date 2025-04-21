import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartClient React CRUD",
  description: "A CRUD application using SmartClient React and Juno",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="smartclient-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.isomorphicDir = "/isomorphic/";
              window.isc = window.isc || {};
              window.isc_useSimpleNames = false;
              window.isc_useStandardSetTimeout = true;
              window.isc_logIsDebugEnabled = true;
              window.isc_logIsInfoEnabled = true;
            }
          `
        }}
      />
      <Script src="/isomorphic/system/modules/ISC_Core.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/system/modules/ISC_Foundation.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/system/modules/ISC_Containers.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/system/modules/ISC_Grids.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/system/modules/ISC_Forms.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/system/modules/ISC_DataBinding.js" strategy="beforeInteractive" />
      <Script src="/isomorphic/skins/Shiva/load_skin.js" strategy="beforeInteractive" />
      {children}
    </>
  );
}
