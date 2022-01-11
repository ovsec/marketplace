<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
import { clickOutside } from '$lib/clickOutside';
    const dispatch = createEventDispatcher();
    
    let show = false;
    const toggle = () => {show = !show; }
    function handleClickOutside(event) {
		show = false;
	}
	
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
    <div on:click={toggle} class="cursor-pointer">
      <!-- <button on:click={toggle} type="button" class={`inline-flex justify-center w-full rounded-md  px-4 py-2 text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ${styles}`} id="menu-button" aria-expanded="true" aria-haspopup="true">
        {title}
        
        
      </button> -->
      <slot name="btn"  >
        <span class="missing">Unknown name</span>
      </slot>
    </div>
  
    <!--
      Dropdown menu, show/hide based on menu state.
  
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    {#if show}
    <div use:clickOutside on:click_outside={handleClickOutside} in:fly="{{ y: 10, duration: 500 }}" out:fade class="origin-top-right border-solid dark:bg-[#313131] dark:border-[#FFFFFF10] light:shadow-lg border-[1px] absolute right-0 mt-2 min-w-fit rounded-md shadow-lg  ring-1 ring-black ring-opacity-5  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <slot name="items"></slot>
    </div>
    {/if}
  </div>
  