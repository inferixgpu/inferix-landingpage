import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = 'access_token';
const storedAccessToken = browser ? localStorage.getItem(key) : undefined;
export const accessToken = writable(storedAccessToken);
accessToken.subscribe((value) => {
	if (browser) {
		if (value) {
			localStorage.setItem(key, value);
		} else {
			localStorage.removeItem(key);
		}
	}
});
