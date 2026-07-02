const { Plugin } = require('obsidian')

// ponytail: no-op plugin — all functionality lives in styles.css,
// which Obsidian injects on enable and removes on disable.
module.exports = class JbmMobilePlugin extends Plugin {}
