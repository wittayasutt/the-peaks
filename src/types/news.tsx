export type NewsDataType = {
	id: string;
	body: string | null;
	headline: string | null;
	sectionId: string;
	thumbnail: string | null;
	webPublicationDate: string;
	webTitle: string;
};

export type NewsMetaType = {
	currentPage: number;
	orderBy: string;
	pages: number;
	pageSize: number;
	startIndex: number;
	total: number;
};

export type NewsDataListType = {
	data: NewsDataType[];
	meta: NewsMetaType;
};

export type HomePageNewsDataListType = {
	topNews: NewsDataListType;
	sportNews: NewsDataListType;
	cultureNews: NewsDataListType;
	lifetyleNews: NewsDataListType;
};
