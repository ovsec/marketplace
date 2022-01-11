
<script>
import { browser } from '$app/env';

import { goto } from '$app/navigation';
import { getStores, navigating, page, session } from '$app/stores';
import { onMount } from 'svelte';
import { connected, provider, chainId, chainData, signer, signerAddress, evmProviderType } from 'svelte-ethers-store'

//    import { defaultEvmStores, web3, selectedAccount, walletType, connected, chainId, chainData } from 'svelte-web3'

    
    /*$: {
        if(browser && $page.params?.address !== $selectedAccount){
             goto('/')
        }
    }*/
    onMount(()=>{
        console.log($page)
    })
</script>
<div>
    {JSON.stringify($page)}

    <div>
        <div>

        </div>
        <div id="profile-pic">

        </div>
        <div>
            Menu items
        </div>
        <div>
            
        </div>
    </div>
</div>