import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ["svelte-hero-icons"],
	  },
	build: {
		target: 'esnext' //browsers can handle the latest ES features
	}
});
