import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Spinner from '@/components/spinner';
import TitleWithSorting from '@/components/title/withSorting';
import SectionStories from '@/components/stories/section';

import text from '@/const/text';
import { dropdownData } from '@/const/sorting';
import { NewsDataListType } from '@/types/news';

import { serviceGetNews } from '@/services';

const SearchPage = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [sortingNews, setSortingNews] = useState(dropdownData[0]);

	const [news, setNews] = useState<NewsDataListType | null>();

	const fetchData = useCallback(
		async (newQuery: string) => {
			setIsLoading(true);

			try {
				const news = await serviceGetNews({ orderBy: sortingNews.value, pageSize: 15, query: newQuery });

				setNews(news);
			} catch (err) {
				console.error(err);
			} finally {
				setQuery(newQuery);
				setIsLoading(false);
			}
		},
		[sortingNews],
	);

	useEffect(() => {
		const { q } = router.query;
		const newQuery = typeof q === 'string' ? q.trim() : '';

		if (newQuery) {
			fetchData(newQuery);
		} else {
			fetchData('');
		}
	}, [router.query, fetchData]);

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
							onChange={setSortingNews}
							hideSorting={!news?.data?.length}
						/>
						{news && <SectionStories data={news} />}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default SearchPage;
