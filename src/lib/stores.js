import { writable, derived } from 'svelte/store';

//import { gun } from './gun';

export const todoStore = writable([]);

export const createCounter = writable(0);

export const theme = writable('dark');

export const signerAddress = writable(null);
