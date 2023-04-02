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

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}

	input,
	button {
		padding: 0;
		border-width: 0;

		font-family: 'Roboto';
		font-size: 1rem;
	}

	input:focus {
		outline: none;
		box-shadow: none;
	}
`;
