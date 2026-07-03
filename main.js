const { Plugin, Notice } = require('obsidian')

// Styling lives in styles.css (injected on enable, removed on disable).
// The only code here is a debug command to diagnose "font not applying" on device.
module.exports = class JbmMobilePlugin extends Plugin {
	onload() {
		this.addCommand({
			id: 'status',
			name: 'Status (debug)',
			callback: async () => {
				const check = async (name) => {
					try { return (await document.fonts.load(`16px '${name}'`)).length > 0 } catch (e) { return false }
				}
				const jbm = await check('JBM Mobile')
				const smiley = await check('Smiley Sans Oblique')
				const b = document.body
				const ft = getComputedStyle(b).getPropertyValue('--font-text').trim()
				new Notice(
					`Mobile Fonts v${this.manifest.version}\n` +
					`is-mobile: ${b.classList.contains('is-mobile')}\n` +
					`JBM loaded: ${jbm} / Smiley loaded: ${smiley}\n` +
					`--font-text: ${ft.slice(0, 70)}`,
					15000
				)
			},
		})
	}
}
