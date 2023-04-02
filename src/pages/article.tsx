import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Spinner from '@/components/spinner';
import Article from '@/components/article';

import { NewsDataType } from '@/types/news';
import { serviceGetNewsById } from '@/services';

const ArticlePage = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);
	const [news, setNews] = useState<NewsDataType | null>();

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const { q } = router.query;

			if (q && typeof q === 'string') {
				const res = await serviceGetNewsById(q);
				setNews(res);
			}
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [router]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Layout title={news?.webTitle} description={news?.headline}>
			<Container>{isLoading ? <Spinner isFull /> : news ? <Article data={news} /> : null}</Container>
		</Layout>
	);
};

export default ArticlePage;
