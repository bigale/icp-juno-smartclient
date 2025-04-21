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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="smartclient-config"
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
        <Script src="/isomorphic/system/modules/ISC_Core.js" />
        <Script src="/isomorphic/system/modules/ISC_Foundation.js" />
        <Script src="/isomorphic/system/modules/ISC_Containers.js" />
        <Script src="/isomorphic/system/modules/ISC_Grids.js" />
        <Script src="/isomorphic/system/modules/ISC_Forms.js" />
        <Script src="/isomorphic/system/modules/ISC_DataBinding.js" />
        <Script src="/isomorphic/skins/Shiva/load_skin.js" />
        <link rel="stylesheet" type="text/css" href="/isomorphic/skins/Shiva/skin_styles.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body { 
                margin: 0;
                padding: 0;
                height: 100vh;
                width: 100vw;
                background: white !important;
                overflow: hidden;
              }
              #__next {
                height: 100vh;
                width: 100vw;
              }
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
