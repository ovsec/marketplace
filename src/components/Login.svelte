<script>
import { Wallet } from 'ethers';

    import { connected, provider, chainId, chainData, signer, signerAddress, evmProviderType } from 'svelte-ethers-store'
    import { defaultEvmStores } from 'svelte-ethers-store'
    import CreateAccount from './CreateAccount.svelte';
    import { fade, fly } from 'svelte/transition';
    import { signerAddress as address } from '$lib/stores'
    let createAccountView = false
    let privateKey;
    let error = '';
    let wallet;
    const login = () => {
        if (privateKey === '') {
			error = 'Please enter private key.'
			return;
		}
        if(!$connected && !$provider){
            defaultEvmStores.setProvider('https://rinkeby.infura.io/v3/ecabadee8f094c9eacd1f34cd0784e7b')
        }
        wallet = new Wallet(privateKey);
        $address = wallet.address;
    }

</script>

<div class="grid  gap-2 grid-cols-1 md:grid-cols-[1fr_auto_1fr] ">
    <div class="p-8 border-[#212121] border-[1px] rounded-md">
        Login with Metamask
    </div>
    <div class="place-self-center">
        <div class="text-sm text-neutral-700 p-2">OR</div>
    </div>
    {#if !createAccountView}
    <div in:fly="{{ x: 200, duration: 2000 }}" out:fade class="p-8 border-[#212121] border-[1px] rounded-md space-y-2">
        <h1>Login with Private </h1>
        
        <form class="space-y-2">
            <input type="text" bind:value={privateKey} required
            placeholder="Enter private key"
            class="appearance-none  relative block w-full px-3 py-2 border-[#212121] border-[1px] bg-transparent dark:text-zinc-200  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <button 
                on:click|preventDefault={(e) => login() && (privateKey = '')}
				type="submit"
				class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login with Private Key</button>
        </form>
        <div class="text-sm inline-flex items-center">
            If you don't have account, &nbsp;<a href={'#'} on:click|preventDefault={() => createAccountView = true} class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">create new acount</a>.
        </div>
    </div>
    {:else}
    <div in:fly="{{ x: -200, duration: 2000 }}" out:fade class="p-8 border-[#212121] border-[1px] rounded-md space-y-2">
        <CreateAccount />
        <div class="text-sm inline-flex items-center">
            If you don't have account, &nbsp;<a href={'#'} on:click|preventDefault={() => createAccountView = false} class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">Login with Private Key</a>.
        </div>
    </div>
    {/if}
</div>