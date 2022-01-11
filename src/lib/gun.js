import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';
import { dev } from '$app/env';
// Database

//var port = 8765;


let peers =  dev ? 'http://localhost:8765/gun' : []
export const db  = GUN(peers);

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
    const alias  =  await user.get('alias'); // username string
    username.set(alias);

    console.log(`signed in as ${alias}, event ${event}`);
});