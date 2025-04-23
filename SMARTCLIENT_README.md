# SMARTCLIENT_README.md

## Runtime Integration Details
- This project uses a full LGPL SmartClient distribution located in `public/isomorphic` for all runtime scripts, modules, and skins.
- The Shiva skin is supported because it is present in `public/isomorphic/skins/Shiva`.
- All SmartClient scripts and styles are loaded via <script> and <link> tags in the <head> of `app/layout.tsx`.
- The npm package `smartclient-lgpl` is not used for runtime; it is not required for this setup.
- This approach is necessary to use skins and modules not included in the npm package (such as Shiva).
- If you change skins or update SmartClient, ensure the corresponding files are present in `public/isomorphic` and referenced in `app/layout.tsx`.