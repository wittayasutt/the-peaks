import { NewsDataType, NewsDataListType, NewsMetaType } from '@/types/news';

export const transformNewsData = (res: any): NewsDataType => {
	return {
		id: res.id,
		body: res.fields.body,
		headline: res.fields.headline,
		sectionId: res.sectionId,
		thumbnail: res.fields.thumbnail,
		webPublicationDate: res.webPublicationDate,
		webTitle: res.webTitle,
	};
};

export const transformNewsMeta = (res: any): NewsMetaType => {
	return {
		currentPage: res.currentPage,
		orderBy: res.orderBy,
		pages: res.pages,
		pageSize: res.pageSize,
		startIndex: res.startIndex,
		total: res.total,
	};
};

export const transformNews = (res: any): NewsDataListType => {
	return {
		data: res.results.map(transformNewsData),
		meta: transformNewsMeta(res),
	};
};
