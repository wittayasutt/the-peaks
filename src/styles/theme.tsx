const theme = {
	colors: {
		primary: '#09357B',
		primaryOpacity: '#2153A3',
		white: '#FFFFFF',
		whiteOpacity: '#FFFFFF66',
	},
	breakpoints: {
		tablet: '768px',
		desktop: '1024px',
	},
};

export const light = {
	...theme,
	colors: {
		...theme.colors,
		background: '#FFFFFF',
	},
};

export const dark = {
	...theme,
	colors: {
		...theme.colors,
		background: '#000000',
	},
};
