import { useEffect } from 'react';

import Layout from '@/components/layouts';
import Container from '@/components/container';
import Title from '@/components/title';

import text from '@/const/text';

import { serviceGetNews } from '@/services';

const Home = () => {
	useEffect(() => {
		const fetch = async () => {
			const res = await serviceGetNews();
			console.log('res', res);
		};

		fetch();
	}, []);

	return (
		<Layout>
			<Container>
				<Title title={text.topStories} />
			</Container>
		</Layout>
	);
};

export default Home;
