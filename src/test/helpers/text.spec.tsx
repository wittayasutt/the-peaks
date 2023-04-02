import { getPlainText } from '@/helpers/text';

describe('getPlainText', () => {
	test('given text = null', () => {
		expect(getPlainText(null)).toEqual('');
	});

	test('given text = ""', () => {
		expect(getPlainText('')).toEqual('');
	});

	test('given text = "<div>Hello, World</div>"', () => {
		expect(getPlainText('<div>Hello, World</div>')).toEqual('Hello, World');
	});
});
