import Title from '@/components/title';
import Dropdown from '@/components/dropdown/sorting';
import { DropdownDataType, DropdownItemType } from '@/types/dropdown';

type TitleProps = {
	title: string;
	selectedData: DropdownItemType;
	onChange: Function;
};

const TitleWithSortingComponent = ({ title, selectedData, onChange }: TitleProps) => {
	return (
		<Title title={title}>
			<Dropdown selectedData={selectedData} onChange={onChange} />
		</Title>
	);
};

export default TitleWithSortingComponent;
