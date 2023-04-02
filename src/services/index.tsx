import axios, { AxiosResponse } from 'axios';
import { transformNews, transformNewsData } from '@/transforms/news';
import SORTING_VALUE from '@/enums/sortingValue';

const $axios = axios.create({
	baseURL: process.env.API_BASE_URL,
});

type GetNewsProps = {
	orderBy?: string;
	page?: number;
	pageSize?: number;
	query?: string;
	section?: string | null;
};

export const serviceGetNews = ({
	orderBy = SORTING_VALUE.NEWEST,
	page = 1,
	pageSize = 8,
	query,
	section,
}: GetNewsProps) => {
	let params = '';

	if (orderBy) {
		params += `&order-by=${orderBy}`;
	}
	if (page) {
		params += `&page=${page}`;
	}
	if (pageSize) {
		params += `&page-size=${pageSize}`;
	}
	if (query) {
		params += `&q=${query}`;
	}
	if (section) {
		params += `&section=${section}`;
	}

	return $axios
		.get(`search?api-key=${process.env.API_KEY}&show-fields=thumbnail,body,headline${params}`)
		.then((response: AxiosResponse) => {
			if (response?.data?.response?.status === 'ok') {
				return transformNews(response.data.response);
			}

			// TODO: Change to actual error message
			throw new Error('Error');
		})
		.catch((err) => {
			throw err;
		});
};

export const serviceGetNewsById = (id: string) => {
	return $axios
		.get(`${id}?api-key=${process.env.API_KEY}&show-fields=thumbnail,body,headline`)
		.then((response: AxiosResponse) => {
			if (response?.data?.response?.status === 'ok') {
				return transformNewsData(response.data.response.content);
			}

			// TODO: Change to actual error message
			throw new Error('Error');
		})
		.catch((err) => {
			throw err;
		});
};
