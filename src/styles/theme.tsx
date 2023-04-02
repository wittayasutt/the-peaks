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
		background: '#F2F2F2',
		text: '#000000',
		textOpacity: '#00000066',
		borderOpacity: '#00000066',
	},
};

export const dark = {
	...theme,
	colors: {
		...theme.colors,
		background: '#000000',
		text: '#FFFFFF',
		textOpacity: '#FFFFFF66',
		borderOpacity: '#FFFFFF66',
	},
};
