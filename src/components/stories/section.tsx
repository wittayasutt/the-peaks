import { useMemo } from 'react';
import styled from 'styled-components';

import Card from '@/components/cards';
import { NewsDataListType } from '@/types/news';

type SectionStoriesProps = {
	data: NewsDataListType;
};

const Wrapper = styled.div`
	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		gap: 2rem;
		margin-bottom: 3rem;
	}
`;

const CardWrapper = styled.div`
	margin-bottom: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		grid-column: span 6;
		margin-bottom: 0;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 4;
	}
`;

const SectionStories = ({ data }: SectionStoriesProps) => {
	const renderData = useMemo(() => {
		return data.data.map((item) => {
			return {
				data: item,
			};
		});
	}, [data]);

	return (
		<Wrapper>
			{renderData &&
				renderData.map((item, index) => {
					return (
						<CardWrapper key={item.data.id}>
							<Card data={item.data} />
						</CardWrapper>
					);
				})}
		</Wrapper>
	);
};

export default SectionStories;
