<script>
	import { defaultEvmStores, web3, selectedAccount, walletType, connected, chainId, chainData } from 'svelte-web3'
import Dropdown from './Dropdown.svelte'
const disable = () => defaultEvmStores.disconnect()
    $:formattedAddress = $selectedAccount ? $selectedAccount.substring(0,6) + '...' + $selectedAccount.substring($selectedAccount.length-6,$selectedAccount.length-1) : ''
</script>
<div>
    {#if $selectedAccount}
    
    <Dropdown >
        <div slot="btn">
            <button class="inline-flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-[#04040510] dark:hover:bg-[#515151] ">
                <img src="/assets/eth.svg" loading="lazy" class="h-6" alt="Etherium"/>
                <div class="text-ellipsis">{formattedAddress}</div>
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div slot="items" class="px-2 py-2">
            <div class="px-2 py-3 rounded-md hover:bg-[#04040510] dark:hover:bg-[#515151]  cursor-pointer text-sm font-bold" role="menuitem" tabindex="-1" id="menu-item-0">
                {$selectedAccount}
            </div>
            <a href="/login" class="px-2 py-3 block font-bold rounded-md hover:bg-[#04040510] dark:hover:bg-[#515151]  cursor-pointer text-md" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
            <a href="/login" class="px-2 py-3 block font-bold rounded-md hover:bg-[#04040510] dark:hover:bg-[#515151]  cursor-pointer text-md" role="menuitem" tabindex="-1" id="menu-item-5" on:click|preventDefault={disable}>Sign out</a>
        </div>
    </Dropdown>
    {/if}
    
</div>