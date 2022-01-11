<script>
import Nav from '../components/Nav.svelte';

import { onMount } from 'svelte';

import '../app.css';
import { theme } from '$lib/stores';

	
		onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			$theme = 'dark'
		} else {
			document.documentElement.classList.remove('dark');
			$theme = 'light'
		}
	});
	
</script>
<div class="bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-100 min-h-screen w-full font-sans">
<div class="container max-w-screen-xl mx-auto px-4 xl:px-4 ">
	<Nav />
	<slot  />
</div>
</div>

