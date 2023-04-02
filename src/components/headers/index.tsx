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
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description} />
			<meta name='keywords' content={title} />

			<meta property='og:site_name' content={title} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />

			{/* PWA */}
			<meta name='application-name' content='The Peaks' />
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='default' />
			<meta name='apple-mobile-web-app-title' content='The Peaks' />
			<meta name='description' content='The Peaks Publisher' />
			<meta name='format-detection' content='telephone=no' />
			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='msapplication-config' content='/icons/browserconfig.xml' />
			<meta name='msapplication-TileColor' content='#09357B' />
			<meta name='msapplication-tap-highlight' content='no' />
			<meta name='theme-color' content='#09357B' />

			<link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
			<link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
			<link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
			<link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

			<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
			<link rel='manifest' href='/manifest.json' />
			<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#09357B' />
			<link rel='shortcut icon' href='/favicon.ico' />

			<meta name='twitter:card' content='summary' />
			<meta name='twitter:url' content='https://sevenpeakssoftware.com' />
			<meta name='twitter:title' content='The Peaks' />
			<meta name='twitter:description' content='The Peaks Publisher' />
			<meta name='twitter:image' content='https://sevenpeakssoftware.com/icons/android-chrome-192x192.png' />
			<meta name='twitter:creator' content='@ThePeaks' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content='The Peaks' />
			<meta property='og:description' content='The Peaks Publisher' />
			<meta property='og:site_name' content='The Peaks' />
			<meta property='og:url' content='https://sevenpeakssoftware.com' />
			<meta property='og:image' content='https://sevenpeakssoftware.com/icons/apple-touch-icon.png' />

			{children}
		</Head>
	);
};

export default DefaultHeader;
