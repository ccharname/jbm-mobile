# Mobile Fonts (JBM + 得意黑)

Obsidian plugin that embeds two subsetted fonts (woff2, base64-inlined) and applies them **on mobile only** (`.is-mobile`), zero effect on desktop:

- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (4 faces) — body & code
- [Smiley Sans 得意黑](https://github.com/atelier-anchor/smiley-sans) (GB2312 L1 + Latin subset) — headings

This is a CSS-only plugin: `main.js` is a no-op; Obsidian injects `styles.css` when the plugin is enabled and removes it when disabled.

## Install via BRAT

1. Install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin.
2. BRAT → **Add beta plugin** → `ccharname/jbm-mobile`.
3. Enable **Mobile Fonts**.

## License

Plugin code: MIT. JetBrains Mono is © JetBrains and Smiley Sans is © atelier Anchor, both licensed under the SIL Open Font License 1.1.
