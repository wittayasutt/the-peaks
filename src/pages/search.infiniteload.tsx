import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Spinner from '@/components/spinner';
import TitleWithSorting from '@/components/title/withSorting';
import SectionStories from '@/components/stories/section';
import Card from '@/components/cards';

import text from '@/const/text';
import { dropdownData } from '@/const/sorting';
import { NewsDataListType } from '@/types/news';
import { DropdownItemType } from '@/types/dropdown';

import { serviceGetNews } from '@/services';

const SearchPage = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState('');
	const [sortingNews, setSortingNews] = useState(dropdownData[0]);

	const [news, setNews] = useState<NewsDataListType | null>();

	const fetchNextData = async () => {
		setPage((prev) => prev + 1);
	};

	const handleSetSortingNews = (selectedSorting: DropdownItemType) => {
		setSortingNews(selectedSorting);
		setPage(1);
	};

	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await serviceGetNews({ orderBy: sortingNews.value, page, pageSize: 15, query });

				setNews(res);
			} catch (err) {
				console.error(err);
			}
		};

		fetch();
	}, [news, sortingNews, page, query]);

	useEffect(() => {
		const { q } = router.query;
		const newQuery = typeof q === 'string' ? q.trim() : '';

		setQuery(newQuery);
	}, [router.query]);

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
								hasMore={true}
								loader={<Spinner isFull />}
							>
								{news && <SectionStories data={news} />}
							</InfiniteScroll>
						)}

						{/* {news && <SectionStories data={news} />} */}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default SearchPage;
