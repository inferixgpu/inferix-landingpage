import { accessToken } from '$stores/auth';
import { user } from '$stores/user';
import type { AxiosInstance } from 'axios';

export async function checkTokenInterceptor(http: AxiosInstance, error: any) {
	const originalRequest = error.config;
	const status = error.response?.status;
	if (status === 401) {
		if (localStorage.getItem('access_token')) {
			accessToken.set('');
			user.set(undefined);
			return new Promise((resolve) => {
				resolve(http(originalRequest));
			});
		} else {
			return Promise.reject(error);
		}
	}
	return Promise.reject(error);
}
