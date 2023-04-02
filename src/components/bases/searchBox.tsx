import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

import text from '@/const/text';
import useClickOutside from '@/hooks/useClickOutside';

// types

type SearchingProps = {
	isSearching: boolean;
};

// styled

const SearchBox = styled.div<SearchingProps>`
	display: flex;
	z-index: 3;
`;

const SearchInputWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const SearchInputFrame = styled.div<SearchingProps>`
	width: ${(props) => (props.isSearching ? '13.5rem' : 0)};

	background-color: ${(props) => props.theme.colors.primaryOpacity};
	border-bottom: 2px solid ${(props) => props.theme.colors.white};

	padding-left: ${(props) => (props.isSearching ? '1rem' : 0)};

	transition-delay: ${(props) => (props.isSearching ? '0.1s' : '0s')};
	transition-duration: 0.2s;
	transition-property: width, padding-left;
	transition-timing-function: ${(props) => (props.isSearching ? 'ease-out' : 'linear')};
`;

const SearchInput = styled.input`
	width: 100%;
	height: 100%;

	color: ${(props) => props.theme.colors.white};
	background-color: transparent;

	&::placeholder {
		color: ${(props) => props.theme.colors.whiteOpacity};
	}
`;

const SearchIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 5.5rem;
	height: 2.5rem;

	position: relative;
	border-bottom: 2px solid ${(props) => props.theme.colors.white};
	cursor: pointer;
`;

const SearchIconBackgroundWrapper = styled.div`
	display: flex;
	justify-content: flex-end;

	width: 100%;
	height: 100%;

	position: absolute;
	z-index: 2;
`;

const SearchIconBackground = styled.div<SearchingProps>`
	width: ${(props) => (props.isSearching ? '100%' : 0)};
	height: 100%;
	background-color: ${(props) => props.theme.colors.primaryOpacity};

	transition-delay: ${(props) => (props.isSearching ? '0s' : '0.2s')};
	transition-duration: 0.1s;
	transition-property: width;
	transition-timing-function: ${(props) => (props.isSearching ? 'linear' : 'ease-out')};
`;

const SearchIcon = styled(Image)`
	z-index: 3;
`;

const SearchBoxComponent = () => {
	const router = useRouter();
	const [isSearching, setIsSearching] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const componentRef = useRef(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const { isClickedOutSide, setIsClickedOutSide } = useClickOutside(componentRef);

	const handleSetIsSearching = (value: boolean) => {
		setIsSearching(value);

		if (value) {
			inputRef.current && inputRef.current?.focus();
		}
	};

	const handleUpdateSearchValue = (value: string) => {
		setSearchValue(value);
	};

	const handleSearch = useCallback(async () => {
		if (isSearching && searchValue) {
			await router.push(`/search?q=${searchValue}`);
			setSearchValue('');
		}
	}, [isSearching, router, searchValue]);

	const handleKeyPress = (event: any) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	useEffect(() => {
		handleSetIsSearching(false);
		setIsClickedOutSide(false);
	}, [isClickedOutSide, setIsClickedOutSide]);

	return (
		<SearchBox ref={componentRef} isSearching={isSearching} onClick={() => handleSetIsSearching(true)}>
			<SearchInputWrapper>
				<SearchInputFrame isSearching={isSearching}>
					<SearchInput
						ref={inputRef}
						type='text'
						value={searchValue}
						placeholder={text.searchAllNews}
						onChange={(e) => handleUpdateSearchValue(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
				</SearchInputFrame>
			</SearchInputWrapper>

			<SearchIconWrapper onClick={handleSearch}>
				<SearchIconBackgroundWrapper>
					<SearchIconBackground isSearching={isSearching} />
				</SearchIconBackgroundWrapper>
				<SearchIcon
					src={require('@/assets/images/search-icon@2x.svg')}
					alt='search-icon'
					height='17'
					width='17'
				/>
			</SearchIconWrapper>
		</SearchBox>
	);
};

export default SearchBoxComponent;
