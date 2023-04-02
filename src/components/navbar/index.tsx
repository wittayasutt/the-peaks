import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@/components/container';
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
`;

const LogoWrapper = styled.div`
	flex: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		flex: initial;
		justify-content: initial;
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
			<Container>
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
			</Container>
		</Wrapper>
	);
};

export default NavbarComponent;
