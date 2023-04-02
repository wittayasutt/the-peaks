import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// style
import { GlobalStyles } from '@/styles/globals';
import { light } from '@/styles/theme';

// fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
