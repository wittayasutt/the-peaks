import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src: url('/fonts/Roboto-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
	}

    html,
	body {
		padding: 0;
		margin: 0;
		font-family: 'Roboto';
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	input {
		padding: 0;
		border: 0;

		font-family: 'Roboto';
		font-size: 1rem;
	}

	input:focus {
		outline: none;
		box-shadow: none;
	}
`;
