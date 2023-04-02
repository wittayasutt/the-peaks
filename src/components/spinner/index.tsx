import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { theme } from '@/styles/theme';

type SpinnerWrapper = {
	isFull?: boolean;
};

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 10rem;
`;

const Spinner = ({ isFull = false }: SpinnerWrapper) => {
	if (isFull) {
		return (
			<SpinnerWrapper>
				<ClipLoader color={theme.colors.primary} />
			</SpinnerWrapper>
		);
	}

	return <ClipLoader color={theme.colors.primary} />;
};

export default Spinner;
