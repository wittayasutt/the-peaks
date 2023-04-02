import styled from 'styled-components';

import Dropdown from '@/components/dropdown/sorting';

type TitleProps = {
	title?: string;
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

const TitleComponent = ({ title }: TitleProps) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Dropdown />
		</Wrapper>
	);
};

export default TitleComponent;
