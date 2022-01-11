<script>
	//import { defaultEvmStores, web3, selectedAccount, walletType, connected, chainId, chainData } from 'svelte-web3'
	import { connected, provider, chainId, chainData, signer, signerAddress, evmProviderType } from 'svelte-ethers-store'

	import { page, session } from '$app/stores';
	import { onMount } from 'svelte';
	import ToggleTheme from './ToggleTheme.svelte';
import Account from './Account.svelte';
import Dropdown from './Dropdown.svelte';


	onMount(() => {
		
	});
</script>

<div class="w-full">
	<div class="relative flex items-center justify-between h-16">
		<img
			class="block lg:hidden h-8 w-auto"
			src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
			alt="Workflow"
		/>
		<span class="hidden lg:block h-8 w-auto text-2xl">NFTAPP</span>

		<div class="flex gap-2 justify-items-end items-center">
			<a
			href={'/'}
			class="active:bg-red-900  px-3 py-2 rounded-md text-sm font-medium"
			class:active={$page.url.pathname === '/'}
			aria-current={$page.url.pathname === '/'}
		>
			Home
		</a>

		<a
			href={'/about'}
			class="active:bg-red-900  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
			class:active={$page.url.pathname === '/login'}
			aria-current={$page.url.pathname === '/login'}
		>
			About Us
		</a>

		
		{#if $signerAddress}
		<Account  />
			
		{/if}
		
		<ToggleTheme />
		</div>
	</div>
</div>
