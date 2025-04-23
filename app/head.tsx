export default function Head() {
  return (
    <>
      <script
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
      <script src="/isomorphic/system/modules/ISC_Core.js"></script>
      <script src="/isomorphic/system/modules/ISC_Foundation.js"></script>
      <script src="/isomorphic/system/modules/ISC_Containers.js"></script>
      <script src="/isomorphic/system/modules/ISC_Grids.js"></script>
      <script src="/isomorphic/system/modules/ISC_Forms.js"></script>
      <script src="/isomorphic/system/modules/ISC_DataBinding.js"></script>
      <script src="/isomorphic/skins/Shiva/load_skin.js"></script>
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
    </>
  );
}
