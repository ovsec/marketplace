<script>
    let username;
</script>
<div class="grid grid-cols-1 md:grid-cols-2">
    <div class="p-8">
        <div class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            Mint NFT from your Insta posts
        </div>
    </div>
    <div class="p-8">
        <h1 class="text-5xl my-8">Login</h1>
        <form class="mt-8 space-y-6 md:max-w-md sm:w-full">
            <input
			name="username"
			id="username"
			bind:value={username}
			autocomplete="email"
			required
			class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-800 dark:text-gray-50"
			placeholder="Username"
		/>
        <input type="file" class="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
        <button class="px-4 py-2 bg-green-500 rounded-sm shadow-lg shadow-green-500/20">Login</button>
        <button class="px-4 py-2 bg-gray-500 rounded-sm shadow-2xl shadow-white/20">Connect Wallet</button>
        </form>
        
        
    </div>
</div>