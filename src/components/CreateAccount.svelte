
<script>
import { onMount } from 'svelte';
import { connected, provider, chainId, chainData, signer, signerAddress, evmProviderType } from 'svelte-ethers-store'
import { defaultEvmStores } from 'svelte-ethers-store'

    
    
    import { ethers, Wallet } from "ethers";

    let wallet
    let provider1
    const create = async () =>{
        /*if(!$connected && !$provider){
            defaultEvmStores.setProvider('https://rinkeby.infura.io/v3/ecabadee8f094c9eacd1f34cd0784e7b')
        }*/

        wallet = Wallet.createRandom();
        
        console.log('New wallet created', wallet)
        //console.log('Block number', await provider.getBlockNumber())
        //let wallet1 = wallet.connect($provider)
        //console.log(await wallet1.provider.getBlockNumber())
        //await console.log(wallet1)
    }
    onMount(async ()=>{
        var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage; // IE <= 10

        console.log(language);
    })
</script>
<div>
    
    {#if !wallet}
        <button class="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm shadow-lg " on:click={create}>
            Create web3 account
        </button>
    {:else if wallet}
        <div>
                {wallet.privateKey}
        </div>
        <pre>
            {JSON.stringify(wallet.mnemonic, 2, 2)}
        </pre>
    {/if}
</div>