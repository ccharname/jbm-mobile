const { Plugin, Notice } = require('obsidian')

// Styling lives in styles.css (injected on enable, removed on disable).
// The only code here is a debug command to diagnose "font not applying" on device.
module.exports = class JbmMobilePlugin extends Plugin {
	onload() {
		this.addCommand({
			id: 'status',
			name: 'Status (debug)',
			callback: async () => {
				let loaded = false
				try {
					const fonts = await document.fonts.load("16px 'JBM Mobile'")
					loaded = fonts.length > 0
				} catch (e) {}
				const b = document.body
				const ft = getComputedStyle(b).getPropertyValue('--font-text').trim()
				new Notice(
					`JBM v${this.manifest.version}\n` +
					`is-mobile: ${b.classList.contains('is-mobile')}\n` +
					`font loaded: ${loaded}\n` +
					`--font-text: ${ft.slice(0, 70)}`,
					15000
				)
			},
		})
	}
}
