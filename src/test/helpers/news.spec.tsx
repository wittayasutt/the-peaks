import { getColorByNewsSectionId } from '@/helpers/news';
import { theme } from '@/styles/theme';

describe('getColorByNewsSectionId', () => {
	test('given type = ""', () => {
		expect(getColorByNewsSectionId('')).toEqual(theme.colors.green);
	});

	test('given type = "culture"', () => {
		expect(getColorByNewsSectionId('culture')).toEqual(theme.colors.yellow);
	});

	test('given type = "Culture"', () => {
		expect(getColorByNewsSectionId('culture')).toEqual(theme.colors.yellow);
	});
});
