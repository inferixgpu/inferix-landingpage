import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';
import { checkTokenInterceptor } from '$services/api/axiosInterceptors';
import CamelCaseConverter from '$services/api/camelCaseConverter';
import type { ApiListResType, ApiResType } from '$services/api/types/api';
import { accessToken } from '$stores/auth';
import type { AxiosInstance } from 'axios';
import axios, { AxiosHeaders } from 'axios';
import { ethers } from 'ethers';

type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface RequestType {
	method: MethodType;
	path: string;
	data?: any;
	formData?: any;
	params?: any;
}

export class ActiveResource<D> {
	BASE_PATH = '';
	auth = true;
	parentId?: string;
	https: AxiosInstance;

	constructor(BASE_PATH: string) {
		this.BASE_PATH = BASE_PATH;
		this.https = axios.create({
			baseURL: PUBLIC_API_URL,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		this.https.interceptors.response.use(
			(response: any) => {
				return response;
			},
			async (error: any): Promise<any> => {
				return await checkTokenInterceptor(this.https, error);
			}
		);
	}

	withoutAuth() {
		this.auth = false;
		return this;
	}

	belongTo(parentId: string) {
		this.parentId = parentId;
		return this;
	}

	//
	// where(params:any) {
	// 	this.params = params;
	// 	return this;
	// }

	find(id: string): Promise<ApiResType<D>> {
		const path = this._urlJoin([id]);
		return this.call<D>({ method: 'GET', path: path });
	}

	all(path?: string, params?: any): Promise<ApiResType<ApiListResType<D>>> {
		const paths = this._urlJoin(path ? [path] : undefined);
		return this.call<ApiListResType<D>>({ method: 'GET', path: paths, params });
	}

	get(): Promise<ApiResType<D>> {
		const path = this._urlJoin();
		return this.call<D>({ method: 'GET', path: path });
	}

	list<T>(path: string): Promise<ApiResType<ApiListResType<T>>> {
		const paths = this._urlJoin([path]);
		return this.call<ApiListResType<T>>({ method: 'GET', path: paths });
	}

	update(
		id: string | undefined,
		data: string,
		action: MethodType = 'PATCH'
	): Promise<ApiResType<any>> {
		const path = this._urlJoin(id ? [id] : undefined);
		return this.call<D>({ method: action, path: path, data: data });
	}

	create(data?: any): Promise<ApiResType<D>> {
		const path = this._urlJoin();
		return this.call<D>({ method: 'POST', path: path, data: data });
	}

	delete(data?: any): Promise<ApiResType<D>> {
		const path = this._urlJoin();
		return this.call<D>({ method: 'DELETE', path: path, data: data });
	}

	action(action: any, { data = null, id = null, method = 'POST' }) {
		let path = null;
		if (id) {
			path = this._urlJoin([id, action]);
		} else {
			path = this._urlJoin([action]);
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return this.call({ method: method, path: path, data: data });
	}

	_urlJoin(args?: string[]) {
		let path = this.BASE_PATH;
		let arrPaths = '';
		if (!!args && args.length !== 0) {
			arrPaths = args.join('/');
			path = path + '/' + arrPaths;
		}
		if (this.parentId) {
			path = path.replace(':id', this.parentId);
		}
		return path;
	}

	get_header(formData = false): AxiosHeaders {
		let headers: any = {
			'Content-Type': 'application/json'
		};
		if (formData) {
			headers = {
				'Content-Type': 'multipart/form-data'
			};
		}

		if (browser && this.auth) {
			let token = localStorage.getItem('access_token');

			if (!token) {
				let anonToken = localStorage.getItem('anonToken');
				if (!anonToken) {
					anonToken = ethers
						.sha256(ethers.toUtf8Bytes(new Date().toISOString()))
						.toString()
						.slice(2);
					localStorage.setItem('anonToken', anonToken);
				}
				token = `AnonUser ${anonToken}`;
			} else {
				console.log('token', token);
				token = `Token ${token}`;
			}
			headers['Authorization'] = token;
		}

		return headers;
	}

	async call<T>(request: RequestType): Promise<ApiResType<T>> {
		const { method, path, data, formData, params } = request;
		try {
			let snakeCasedParams;
			let snakeCasedBody = data;

			if (params) {
				snakeCasedParams = this._camelToSnake(params);
			} else if (data) {
				snakeCasedBody = JSON.stringify(this._camelToSnake(data));
			}
			const res = await this.https.request({
				method: method,
				url: path,
				params: snakeCasedParams,
				data: formData || snakeCasedBody,
				headers: this.get_header(!!formData)
			});
			return this._parseData<T>(res);
		} catch (err: any) {
			const errors = this.handleError(err?.response);
			return {
				status: 'failed',
				...errors
			};
		}
	}

	_parseData<T>(res: any): ApiResType<T> {
		const parsedData = this._snakeToCamel(res.data);
		return {
			status: 'success',
			result: parsedData
		};
	}

	// Convert snake_case to camelCase
	_snakeToCamel = (object: any): any => {
		return CamelCaseConverter.convertKeys('camel', object);
	};

	// Convert camelCase to snake_case
	_camelToSnake = (object: any): any => {
		return CamelCaseConverter.convertKeys('snake', object);
	};

	handleError = (errResponse: any) => {
		const status = errResponse?.status;
		const errorData = errResponse?.data;
		let detailMsg: string;

		if (status === 400) {
			if (!(errorData?.detail instanceof Array)) {
				detailMsg = Object.keys(errorData?.detail)
					.map((k) => {
						if (errorData.detail[k].join) {
							return errorData.detail[k].join('\n');
						}
						return Object.values(errorData.detail[k]).join('\n');
					})
					.join('\n');
			} else {
				detailMsg = errorData?.detail.join('\n');
			}
		} else {
			if (status === 401) {
				accessToken.set('');
			}
			detailMsg = errorData?.detail;
		}
		return { detail: detailMsg, code: errorData?.code };
	};
}
