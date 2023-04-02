import { theme } from '@/styles/theme';
import NEWS_TYPES from '@/enums/newsTypes';

export const getColorByNewsSectionId = (type: string): string => {
	if (!type) {
		return theme.colors.green;
	}

	switch (type.toLowerCase()) {
		case NEWS_TYPES.CULTURE:
			return theme.colors.yellow;
		case NEWS_TYPES.LIFE_AND_STYLE:
			return theme.colors.blue;
		case NEWS_TYPES.SPORT:
			return theme.colors.red;
		default:
			return theme.colors.green;
	}
};
