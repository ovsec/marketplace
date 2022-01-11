<script context="module">
    export async function load({ session }) {
      return {
        props: {
          user: session.user,
        },
      };
    }
  </script>
  
<script>
    

    import { browser } from '$app/env';
    import { goto } from '$app/navigation';
    import CreateAccount from '../components/CreateAccount.svelte';
    import { onMount } from 'svelte';
    import FaChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte'
    import  Balance  from '../components/Balance.svelte'
    import { ethers } from "ethers";
    import { signerAddress as address } from '$lib/stores'
    //import WalletConnectProvider from "@walletconnect/web3-provider";
    import { connected, provider, chainId, chainData, signer, signerAddress, evmProviderType } from 'svelte-ethers-store'
    import { defaultEvmStores } from 'svelte-ethers-store'
    import InstagramLogin from 'svelte-instagram-login';
    import Login from '../components/Login.svelte';
    
    export let user;

    $: Web3Modal = browser ? window.Web3Modal?.default : null
    $: WalletConnectProvider = browser ? window.WalletConnectProvider?.default : null
    const handleSuccess = ({ detail: { data }}) => {
        console.log(data); // code or token
      }

      const handleFailure = ({ detail: { error, errorReason, errorDescription }}) => {
        // error code
        console.error(error, errorReason, errorDescription); 
      }
    
    
    onMount(()=>{
       
        console.log()
    })
    const disable = () => defaultEvmStores.disconnect()
    const enable = async () => {
        let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: 'ecabadee8f094c9eacd1f34cd0784e7b'
            }
          }
        },
        disableInjectedProvider: false,
      })
      const provider = await web3Modal.connect()
      defaultEvmStores.setProvider(provider)
      console.log('Enable with Wallet connect')
    }
    const enableWithProvider = async () => {
        defaultEvmStores.setProvider(new ethers.providers.InfuraProvider('ropsten', 'ecabadee8f094c9eacd1f34cd0784e7b'), '0x669e83c67297cbE9aa2CD87A40a2Ba48E2A41c30')
    }
    
    $: checkAccount = $signerAddress || '0x0000000000000000000000000000000000000000'
  </script>
  
  <div class="min-h-screen space-y-4 overflow-hidden">

    <div class="h-screen md:h-[32rem] text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div class="">
            <div class=" text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                Mint NFT from your Insta posts {user}
            </div>
        </div>
        <div>
            <p>
                Simple example to using the <a href="https://web3modal.com/">Web3Modal</a> library to connect the default store.
              
            
            </p>
              <div>
                  <CreateAccount />

                  <InstagramLogin 
      clientId="206915578316249" 
      redirectUrl="https://feeble-cord.surge.sh/auth/instagram/callback/" 
      scope='user_profile,user_media'
      on:success={handleSuccess}
      on:failure={handleFailure} />
              </div>
              
              {#if !$connected}
              <div class="buttons">
                <button class="px-4 py-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-sm shadow-lg shadow-green-500/20" on:click="{enable}">
                    Connect using Web3Modal
                </button>
                <button class="px-4 py-2 bg-green-500 rounded-sm shadow-lg shadow-green-500/20" on:click="{enableWithProvider}">Connect using Infura</button>
              </div>
              {/if}
              
              {#if  $connected}
              <div class="buttons">
                <button class="px-4 py-2 hover:bg-gray-900 inline-flex  gap-2 items-center" on:click="{disable}">
                    <div class="h-8 w-8">
                        <FaChevronCircleUp />
                    </div>
                    
                    Disconnect</button>
              </div>
              {/if}
              
              
              {#if $connected}
              <p>
                Connected chain: chainId = {$chainId}
              </p>
              
              <p>
                Selected account: {$signerAddress || $address || 'not defined'}
              </p>
              
              <p>
                Wallet type: {$evmProviderType || 'not defined'}
              </p>
              
              
              <p>Selected account balance = <Balance address={checkAccount} /> {$chainData.nativeCurrency?.symbol}</p>
              
              {/if}
        </div>
    </div>
    <div>
        <Login />
    </div>
    <div>
        <h1 class="font-bold text-4xl">How it works</h1>
    </div>
  </div>