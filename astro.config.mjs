// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// Your live URL (used for RSS, sitemap, canonical URLs).
	site: 'https://hamdh7976.github.io',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
	},
});
