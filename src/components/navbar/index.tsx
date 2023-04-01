import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Search from '@/components/bases/searchBox';

const Wrapper = styled.nav`
	width: 100%;
	height: 8rem;

	background-color: ${(props) => props.theme.colors.primary};
`;

const Navbar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100%;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		flex-direction: row;
		justify-content: space-between;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		max-width: ${(props) => props.theme.breakpoints.desktop};
		margin: auto;
	}
`;

const LogoWrapper = styled.div`
	flex: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		flex: initial;
		justify-content: initial;

		padding: 0 2rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding: initial;
	}
`;

const SearchWrapper = styled.div`
	display: flex;
	align-items: flex-end;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		height: 100%;
	}
`;

const NavbarComponent = () => {
	return (
		<Wrapper>
			<Navbar>
				<LogoWrapper>
					<Link href='/'>
						<Image
							src={require('@/assets/images/Logo_White.png')}
							alt='logo'
							height='56'
							width='142'
							priority
						/>
					</Link>
				</LogoWrapper>
				<SearchWrapper>
					<Search />
				</SearchWrapper>
			</Navbar>
		</Wrapper>
	);
};

export default NavbarComponent;
