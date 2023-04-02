import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import Card from '@/components/cards';
import { NewsDataListType } from '@/types/news';
import { isDesktop } from '@/helpers/matchMedia';

type TopStoriesProps = {
	data: NewsDataListType;
};

type CardWrapperProps = {
	column: number;
	row: number;
};

const Wrapper = styled.div`
	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-template-rows: repeat(5, 1fr);
		gap: 2rem;
	}
`;

const CardWrapper = styled.div<CardWrapperProps>`
	margin-bottom: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		margin-bottom: 0;

		${(props) => (props.column ? `grid-column: span ${props.column}` : '')};
		${(props) => (props.row ? `grid-row: span ${props.row}` : '')};
	}
`;

const TopStories = ({ data }: TopStoriesProps) => {
	const [desktop, setDesktop] = useState(false);

	const renderData = useMemo(() => {
		return data.data.map((item, index) => {
			let column = 6;
			let row = 1;
			let onlyText = false;
			let onlyTitle = false;

			if (desktop) {
				switch (true) {
					case index === 0:
						column = 6;
						row = 5;
						break;
					case index > 0 && index <= 2:
						column = 3;
						row = 3;
						onlyTitle = true;
						break;
					case index > 2 && index <= 4:
						column = 3;
						row = 2;
						onlyText = true;
						onlyTitle = true;
						break;
					default:
						column = 4;
						row = 1;
						break;
				}
			}

			return {
				data: item,
				column,
				row,
				onlyText,
				onlyTitle,
			};
		});
	}, [data, desktop]);

	// TODO: Check on-resize
	useEffect(() => {
		if (isDesktop()) {
			setDesktop(true);
		}
	}, []);

	return (
		<Wrapper>
			{renderData &&
				renderData.map((item, index) => {
					return (
						<CardWrapper key={item.data.id} column={item.column} row={item.row}>
							<Card
								data={item.data}
								headline={desktop && index === 0}
								onlyText={item.onlyText}
								onlyTitle={item.onlyTitle}
							/>
						</CardWrapper>
					);
				})}
		</Wrapper>
	);
};

export default TopStories;
