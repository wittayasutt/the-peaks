import styled from 'styled-components';

const Footer = styled.footer`
	width: 100%;
	height: 15rem;

	background-color: ${(props) => props.theme.colors.primary};
`;

const FooterComponent = () => {
	return <Footer />;
};

export default FooterComponent;
