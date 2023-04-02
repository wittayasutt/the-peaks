import { useEffect, useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { NewsDataType } from '@/types/news';
import { getPlainText } from '@/helpers/text';

import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

type ArticleProp = {
	data: NewsDataType;
};

const Wrapper = styled.div`
	padding: 2rem 0;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding: 7rem 0 2rem;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}
`;

const TitleWrapper = styled.div`
	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 8;
	}
`;

const Content = styled.div`
	line-height: 1.75rem;
	order: 2;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 8;
		order: 1;
	}
`;

const MediaWrapper = styled.div`
	order: 1;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 4;
		order: 2;
	}
`;

const Date = styled.time`
	font-size: 0.75rem;
`;

const Title = styled.h1`
	font-family: Georgia;
	font-size: 2rem;

	margin: 1rem 0;
`;

const Headline = styled.h2`
	font-family: Georgia;
	font-size: 1.25rem;
`;

const Horizontal = styled.hr`
	border: 1px solid ${(props) => props.theme.colors.grey};
	margin: 1rem 0;
	opacity: 0.2;
`;

const Media = styled(Image)`
	width: 100%;
	height: auto;

	margin-bottom: 1rem;
`;

const ArticleComponent = ({ data }: ArticleProp) => {
	const [date, setDate] = useState<Dayjs>();

	useEffect(() => {
		const bst = dayjs.utc(data.webPublicationDate).tz('Europe/London');
		setDate(bst);
	}, [data]);

	return (
		<Wrapper>
			<Container>
				<TitleWrapper>
					<Date>{dayjs(date).format('ddd D MMM YYYY HH.mm BST')}</Date>
					<Title>{data.webTitle}</Title>
					<Headline>{data.headline}</Headline>
					<Horizontal />
				</TitleWrapper>
			</Container>
			<Container>
				<Content>{getPlainText(data.body)}</Content>
				<MediaWrapper>
					{data.thumbnail && <Media src={data.thumbnail} alt='media' width={500} height={300} />}
				</MediaWrapper>
			</Container>
		</Wrapper>
	);
};

export default ArticleComponent;
