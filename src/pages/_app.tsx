import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/globals';
import { light } from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ThemeProvider theme={light}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
