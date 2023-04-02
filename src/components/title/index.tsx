import { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = {
	children?: ReactNode;
	title: string;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 2.5rem 0 2rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const Title = styled.h1`
	font-family: Georgia;
	font-size: 3rem;

	margin-bottom: 1.5rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		margin-bottom: 0;
	}
`;

const TitleComponent = ({ children, title }: TitleProps) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			{children}
		</Wrapper>
	);
};

export default TitleComponent;
