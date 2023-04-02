import { NewsDataType, NewsDataListType, NewsMetaType } from '@/types/news';

export const transformNewsData = (res: any): NewsDataType => {
	return {
		id: res?.id || '',
		body: res?.fields?.body || null,
		headline: res?.fields?.headline || null,
		sectionId: res?.sectionId || '',
		thumbnail: res?.fields?.thumbnail || null,
		webPublicationDate: res?.webPublicationDate || '',
		webTitle: res?.webTitle || '',
	};
};

export const transformNewsMeta = (res: any): NewsMetaType => {
	return {
		currentPage: res?.currentPage || 0,
		orderBy: res?.orderBy || '',
		pages: res?.pages || 0,
		pageSize: res?.pageSize || 0,
		startIndex: res?.startIndex || 0,
		total: res?.total || 0,
	};
};

export const transformNews = (res: any): NewsDataListType => {
	return {
		data: res.results.map(transformNewsData),
		meta: transformNewsMeta(res),
	};
};
