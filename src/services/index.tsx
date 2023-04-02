import axios, { AxiosResponse } from 'axios';
import { transformNews } from '@/transforms/news';
import SORTING_VALUE from '@/enums/sortingValue';

const $axios = axios.create({
	baseURL: process.env.API_BASE_URL,
});

type GetNewsProps = {
	orderBy?: string;
	pageSize?: number;
	section?: string | null;
};

export const serviceGetNews = ({ orderBy = SORTING_VALUE.NEWEST, pageSize = 8, section }: GetNewsProps) => {
	let params = '';

	if (orderBy) {
		params += `&order-by=${orderBy}`;
	}
	if (pageSize) {
		params += `&page-size=${pageSize}`;
	}
	if (section) {
		params += `&section=${section}`;
	}

	return $axios
		.get(`search?api-key=${process.env.API_KEY}&show-fields=thumbnail,body${params}`)
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

export const serviceGetNewsById = ({ url }: { url: string }) => {
	return $axios
		.get(url)
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
