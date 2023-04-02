import { ReactNode } from 'react';
import styled from 'styled-components';

import Header from '@/components/headers';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import text from '@/const/text';

type LayoutProps = {
	children?: ReactNode;
	title?: string;
	description?: string;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
`;

const Main = styled.main`
	flex: 1;
`;

const DefaultLayout = ({ children, title = text.site_title, description = text.site_description }: LayoutProps) => {
	return (
		<>
			<Header title={title} description={description} />
			<Wrapper>
				<Navbar />
				<Main>{children}</Main>
				<Footer />
			</Wrapper>
		</>
	);
};

export default DefaultLayout;
