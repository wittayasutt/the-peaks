export const getPlainText = (text: string | null): string => {
	if (!text) {
		return '';
	}

	return text.replace(/<[^>]+>/g, '');
};
