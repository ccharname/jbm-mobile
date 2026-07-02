# JBM Mobile Font

Obsidian plugin that embeds a subsetted [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (woff2, base64-inlined, 4 faces: regular/bold/italic/bold-italic) and applies it **on mobile only** (`.is-mobile`). Zero effect on desktop.

This is a CSS-only plugin: `main.js` is a no-op; Obsidian injects `styles.css` when the plugin is enabled and removes it when disabled.

## Install via BRAT

1. Install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin.
2. BRAT → **Add beta plugin** → `ccharname/jbm-mobile`.
3. Enable **JBM Mobile Font**.

## License

Plugin code: MIT. JetBrains Mono is © JetBrains, licensed under the [SIL Open Font License 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt).
