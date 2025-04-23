# AI_README

## SmartClient Integration (Current Setup)
- All SmartClient scripts and styles are loaded from the `public/isomorphic` directory using <script> and <link> tags in `app/layout.tsx`.
- The project uses the Shiva skin, which is present in `public/isomorphic/skins/Shiva`.
- The npm package `smartclient-lgpl` is not used for runtime assets; all runtime resources come from the public directory.
- SmartClient global configuration and initialization is handled in a <script> block in the <head> of `app/layout.tsx`.
- This setup is required to support the Shiva skin and full SmartClient features under LGPL.