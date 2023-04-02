import { ReactNode } from 'react';
import styled from 'styled-components';

type ContainerProps = {
	children?: ReactNode;
};

const Wrapper = styled.div`
	height: inherit;
	padding: 0 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		max-width: ${(props) => props.theme.breakpoints.desktop};
		margin: auto;
		padding: 0;
	}
`;

const ContainerComponent = ({ children }: ContainerProps) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ContainerComponent;
