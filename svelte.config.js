import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: node(),
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		}),
		prerender: {
			enabled: false
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
