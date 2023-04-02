import Dropdown from './index';
import { dropdownData } from '@/const/sorting';
import { DropdownItemType } from '@/types/dropdown';

type SortingDropdownProps = {
	selectedData: DropdownItemType;
	onChange: Function;
};

const SortingDropdownComponent = ({ selectedData, onChange }: SortingDropdownProps) => {
	return <Dropdown data={dropdownData} selectedData={selectedData} onChange={onChange} />;
};

export default SortingDropdownComponent;
