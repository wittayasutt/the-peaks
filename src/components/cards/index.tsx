import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Image from 'next/image';

import { NewsDataType } from '@/types/news';
import { getColorByNewsSectionId } from '@/helpers/news';
import { getPlainText } from '@/helpers/text';
import { theme } from '@/styles/theme';

const DEFAULT_COLOR = theme.colors.green;

type AdjustDesktopProps = {
	headline?: boolean;
	onlyText?: boolean;
	onlyTitle?: boolean;
};

type CardProps = AdjustDesktopProps & {
	data: NewsDataType;
};

type WrapperProps = {
	borderColor: string;
};

const Wrapper = styled.div<WrapperProps>`
	display: flex;
	height: 100%;

	position: relative;
	border-bottom: 3px solid ${(props) => props.borderColor};

	overflow: hidden;
	cursor: pointer;
`;

const Thumbnail = styled(Image)`
	width: 100%;
	height: 100%;

	object-fit: cover;
`;

const LabelWrapper = styled.div`
	display: flex;
	align-items: flex-end;

	width: 100%;
	height: 100%;
	position: absolute;
`;

const Label = styled.div<AdjustDesktopProps>`
	width: 100%;
	height: 5.5rem;

	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};

	padding: 0.4rem 0.5rem;
	opacity: 0.9;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		height: ${(props) => (props.onlyText ? '100%' : props.headline ? '7.5rem' : '5.5rem')};
		padding: ${(props) => (props.headline ? '0.75rem' : '0.4rem 0.5rem')};
		opacity: ${(props) => (props.onlyText ? '1' : '0.9')};
	}
`;

const Title = styled.h4<AdjustDesktopProps>`
	font-family: Georgia;
	font-size: 1rem;
	line-height: 1.25rem;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	@supports (-webkit-line-clamp: 2) {
		text-overflow: ellipsis;
		white-space: initial;
		overflow: hidden;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		font-size: ${(props) => (props.headline ? '1.5rem' : '1rem')};

		@supports (-webkit-line-clamp: ${(props) => (props.onlyTitle ? 4 : 2)}) {
			text-overflow: ellipsis;
			white-space: initial;
			overflow: hidden;

			display: -webkit-box;
			-webkit-line-clamp: ${(props) => (props.onlyTitle ? 4 : 2)};
			-webkit-box-orient: vertical;
		}
	}
`;

const SubTitle = styled.p<AdjustDesktopProps>`
	margin-top: 0.25rem;
	font-size: 0.75rem;
	line-height: 1rem;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	@supports (-webkit-line-clamp: 2) {
		text-overflow: ellipsis;
		white-space: initial;
		overflow: hidden;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		${(props) => props.onlyTitle && 'display: none'};
	}
`;

const CardComponent = ({ data, headline, onlyText, onlyTitle }: CardProps) => {
	const [color, setColor] = useState(DEFAULT_COLOR);

	useEffect(() => {
		const newColor = getColorByNewsSectionId(data.sectionId);
		setColor(newColor);
	}, [data]);

	const thumbnail = data.thumbnail ? data.thumbnail : require('@/assets/images/thumbnail.svg');

	return (
		<Wrapper borderColor={color}>
			<Thumbnail src={thumbnail} alt='thumbnail' width={500} height={300} />
			<LabelWrapper>
				<Label headline={headline} onlyText={onlyText}>
					<Title headline={headline} onlyTitle={onlyTitle}>
						{data.webTitle}
					</Title>
					<SubTitle onlyTitle={onlyTitle}>{getPlainText(data.body)}</SubTitle>
				</Label>
			</LabelWrapper>
		</Wrapper>
	);
};

export default CardComponent;
