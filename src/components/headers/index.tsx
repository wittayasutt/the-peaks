import { ReactNode } from 'react';
import Head from 'next/head';

type HeaderProps = {
	children?: ReactNode;
	title: string;
	description: string;
};

const DefaultHeader = ({ children, title, description }: HeaderProps) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta name='description' content={description} />
			<meta name='keywords' content={title} />

			<meta property='og:site_name' content={title} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />

			{children}
		</Head>
	);
};

export default DefaultHeader;
