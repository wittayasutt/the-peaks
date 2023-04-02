import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Spinner from '@/components/spinner';
import TitleWithSorting from '@/components/title/withSorting';
import SectionStories from '@/components/stories/section';

import text from '@/const/text';
import { dropdownData } from '@/const/sorting';
import { NewsDataListType } from '@/types/news';
import { DropdownItemType } from '@/types/dropdown';

import { serviceGetNews } from '@/services';

const SearchPage = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);
	const [hasMore, setHasMore] = useState(false);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState('');
	const [sortingNews, setSortingNews] = useState(dropdownData[0]);

	const [news, setNews] = useState<NewsDataListType | null>(null);

	const reset = () => {
		setIsLoading(true);
		setNews(null);
		setPage(1);
	};

	const fetchNextData = async () => {
		setPage((prev) => prev + 1);
	};

	const handleSetSortingNews = (selectedSorting: DropdownItemType) => {
		setSortingNews(selectedSorting);
		reset();
	};

	useEffect(() => {
		const fetchData = async (newQuery: string, page: number) => {
			try {
				const res = await serviceGetNews({ orderBy: sortingNews.value, page, pageSize: 15, query: newQuery });

				let newRes: NewsDataListType;
				if (news) {
					newRes = {
						data: [...news.data, ...res.data],
						meta: res.meta,
					};
				} else {
					newRes = res;
				}

				const willHaveMore = newRes.meta.currentPage < newRes.meta.pages;
				setHasMore(willHaveMore);

				setNews(newRes);
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		};

		const { q } = router.query;
		const newQuery = typeof q === 'string' ? q.trim() : '';

		if (newQuery) {
			fetchData(newQuery, page);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, page, sortingNews]);

	useEffect(() => {
		const { q } = router.query;
		const newQuery = typeof q === 'string' ? q.trim() : '';

		if (query !== newQuery) {
			setQuery(newQuery);
			reset();
		}
	}, [query, router.query]);

	return (
		<Layout title={`${query} | ${text.siteTitle} `}>
			<Container>
				{isLoading ? (
					<Spinner isFull />
				) : (
					<>
						<TitleWithSorting
							title={news?.data?.length ? text.searchResults : text.noResult}
							selectedData={sortingNews}
							onChange={handleSetSortingNews}
							hideSorting={!news?.data?.length}
						/>

						{news?.data?.length && (
							<InfiniteScroll
								dataLength={news?.data?.length}
								next={fetchNextData}
								hasMore={hasMore}
								loader={<Spinner isFull />}
							>
								{news && <SectionStories data={news} />}
							</InfiniteScroll>
						)}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default SearchPage;
