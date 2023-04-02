import Title from '@/components/title';
import Dropdown from '@/components/dropdown/sorting';
import { DropdownItemType } from '@/types/dropdown';

type TitleProps = {
	title: string;
	selectedData: DropdownItemType;
	hideSorting?: boolean;
	onChange: Function;
};

const TitleWithSortingComponent = ({ title, selectedData, hideSorting, onChange }: TitleProps) => {
	return <Title title={title}>{!hideSorting && <Dropdown selectedData={selectedData} onChange={onChange} />}</Title>;
};

export default TitleWithSortingComponent;
