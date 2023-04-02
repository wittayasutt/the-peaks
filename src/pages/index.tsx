import { useEffect, useState } from 'react';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Title from '@/components/title';
import TopStories from '@/components/stories/top';

import text from '@/const/text';
import { NewsDataListType } from '@/types/news';

import { serviceGetNews } from '@/services';

const Home = () => {
	const [topNews, setTopNews] = useState<NewsDataListType | null>();

	useEffect(() => {
		const fetch = async () => {
			const res = await serviceGetNews();
			setTopNews(res);
		};

		fetch();
	}, []);

	return (
		<Layout>
			<Container>
				<Title title={text.topStories} />

				{/* TODO: Add empty state */}
				{topNews && <TopStories data={topNews} />}
			</Container>
		</Layout>
	);
};

export default Home;
