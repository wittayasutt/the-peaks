import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { DropdownDataType, DropdownItemType } from '@/types/dropdown';
import useClickOutside from '@/hooks/useClickOutside';

type DropdownProps = {
	data: DropdownDataType;
	selectedData: DropdownItemType;
	onChange: Function;
};

type IsOpenProps = {
	isOpen: boolean;
};

const Wrapper = styled.div`
	position: relative;
`;

const Button = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 16rem;
	height: 2.5rem;

	background-color: transparent;
	border-width: 0 0 1px 0;
	border-color: ${(props) => props.theme.colors.textOpacity};

	padding: 0 0.5rem;

	cursor: pointer;
`;

const DropdownList = styled.ul<IsOpenProps>`
	position: absolute;
	top: -1px;
	left: -1px;

	background-color: ${(props) => props.theme.colors.background};
	border: 1px solid ${(props) => props.theme.colors.borderOpacity};

	visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

const DropdownItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	min-width: 16rem;
	height: 2.5rem;
	padding: 0 0.5rem;

	cursor: pointer;
`;

const CaretDownIcon = styled.div<IsOpenProps>`
	transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
	transition: 0.2s;
`;

const SortingDropdownComponent = ({ data, selectedData, onChange }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef(null);
	const { isClickedOutSide, setIsClickedOutSide } = useClickOutside(ref);

	const handleOpenDropdown = (value: boolean) => {
		setIsOpen(value);
	};

	const handleSelectDropdownItem = (item: DropdownItemType) => {
		onChange(item);
		handleOpenDropdown(false);
	};

	useEffect(() => {
		handleOpenDropdown(false);
		setIsClickedOutSide(false);
	}, [isClickedOutSide, setIsClickedOutSide]);

	return (
		<Wrapper ref={ref}>
			<Button className='dropbtn' onClick={() => handleOpenDropdown(true)}>
				<span>{selectedData.label}</span>
				<CaretDownIcon isOpen={isOpen}>
					<FontAwesomeIcon icon={faCaretDown} />
				</CaretDownIcon>
			</Button>
			<DropdownList isOpen={isOpen}>
				{data.map((item, index) => (
					<DropdownItem key={item.value} onClick={() => handleSelectDropdownItem(item)}>
						<span>{item.label}</span>
						{index === 0 && (
							<CaretDownIcon isOpen={isOpen}>
								<FontAwesomeIcon icon={faCaretDown} />
							</CaretDownIcon>
						)}
					</DropdownItem>
				))}
			</DropdownList>
		</Wrapper>
	);
};

export default SortingDropdownComponent;
