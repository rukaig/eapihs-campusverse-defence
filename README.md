# EAPIHS CampusVerse — scroll-driven defence presentation

Offline Vite presentation for the innovation-paper defence. All slide copy and
speaker notes live in `src/content.js`.

## Run

```bash
npm install
npm run dev
```

Build a static folder that works offline when served from any plain static host:

```bash
npm run build
npm run preview
```

`vite.config.js` uses `base: "./"`, so `dist/` can be copied into a subfolder.

## Theme data

`src/themes/registry.js` is generated from the actual CampusVerse app source:

```bash
npm run themes:extract
```

It copies the app's 12 colour choices plus "Follow device", and all 16 subject
looks with their light/dark token values. The presentation never fetches them
at runtime.

## Phase status

- Phase 1: scaffold, source study, content, theme registry, flat scroll shell,
  side index, presenter overlays and keyboard controls.
- Phase 2+: three.js stage, procedural companions, section scenes and final
  verification (not built yet).
