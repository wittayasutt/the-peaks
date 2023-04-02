import { useCallback, useEffect, useState } from 'react';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Spinner from '@/components/spinner';
import Title from '@/components/title';
import TitleWithSorting from '@/components/title/withSorting';
import TopStories from '@/components/stories/top';
import SectionStories from '@/components/stories/section';

import text from '@/const/text';
import { dropdownData } from '@/const/sorting';
import { HomePageNewsDataListType } from '@/types/news';
import NEWS_TYPES from '@/enums/newsTypes';

import { serviceGetNews } from '@/services';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [sortingNews, setSortingNews] = useState(dropdownData[0]);

	const [news, setNews] = useState<HomePageNewsDataListType | null>();

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const [topNews, sportNews, cultureNews, lifetyleNews] = await Promise.all([
				serviceGetNews({ orderBy: sortingNews.value }),
				serviceGetNews({ orderBy: sortingNews.value, pageSize: 3, section: NEWS_TYPES.SPORT }),
				serviceGetNews({ orderBy: sortingNews.value, pageSize: 3, section: NEWS_TYPES.CULTURE }),
				serviceGetNews({ orderBy: sortingNews.value, pageSize: 3, section: NEWS_TYPES.LIFE_AND_STYLE }),
			]);

			const news = { topNews, sportNews, cultureNews, lifetyleNews };
			setNews(news);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [sortingNews]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Layout>
			<Container>
				{isLoading ? (
					<Spinner isFull />
				) : (
					<>
						<TitleWithSorting
							title={text.topStories}
							selectedData={sortingNews}
							onChange={setSortingNews}
						/>

						{/* TODO: Add empty state */}
						{news?.topNews && <TopStories data={news.topNews} />}

						<Title title={text.sports} />
						{news?.sportNews && <SectionStories data={news.sportNews} />}

						<Title title={text.culture} />
						{news?.cultureNews && <SectionStories data={news.cultureNews} />}

						<Title title={text.lifeandstyle} />
						{news?.lifetyleNews && <SectionStories data={news.lifetyleNews} />}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Home;
