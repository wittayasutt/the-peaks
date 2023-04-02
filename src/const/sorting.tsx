import { DropdownDataType } from '@/types/dropdown';
import text from '@/const/text';
import SORTING_VALUE from '@/enums/sortingValue';

export const dropdownData: DropdownDataType = [
	{ label: text.newestFirst, value: SORTING_VALUE.NEWEST },
	{ label: text.oldestFirst, value: SORTING_VALUE.OLDEST },
	{ label: text.mostPopular, value: SORTING_VALUE.RELEVANCE },
];
