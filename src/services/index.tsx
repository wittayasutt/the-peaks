import axios, { AxiosResponse } from 'axios';
import { transformNews } from '@/transforms/news';

const $axios = axios.create({
	baseURL: process.env.API_BASE_URL,
});

export const serviceGetNews = () => {
	return $axios
		.get(`search?api-key=${process.env.API_KEY}&show-fields=thumbnail,body&show-elements=[image]`)
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
