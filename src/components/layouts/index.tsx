import { ReactNode } from 'react';

import Header from '@/components/headers';
import Navbar from '@/components/navbar';

import text from '@/const/text';

type LayoutProps = {
	children?: ReactNode;
	title?: string;
	description?: string;
};

const DefaultLayout = ({
	children,
	title = text.site_title,
	description = text.site_description,
}: LayoutProps) => {
	return (
		<>
			<Header title={title} description={description} />
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default DefaultLayout;
