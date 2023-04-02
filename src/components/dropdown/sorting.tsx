import { useState } from 'react';

import Dropdown from './index';
import { DropdownDataType } from '@/types/dropdown';

import text from '@/const/text';

const data: DropdownDataType = [
	{ label: text.newestFirst, value: 'newestFirst' },
	{ label: text.oldestFirst, value: 'oldestFirst' },
	{ label: text.mostPopular, value: 'mostPopular' },
];

const SortingDropdownComponent = () => {
	const [seletedItem, setSelectedItem] = useState(data[0]);

	return <Dropdown data={data} selectedData={seletedItem} onChange={setSelectedItem} />;
};

export default SortingDropdownComponent;
