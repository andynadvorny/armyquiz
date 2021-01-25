import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  font-size: 14px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    transition: .3s;
    &:hover, &:focus {
      opacity: .5;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default function Footer(props) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <FooterWrapper {...props}>
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
        <p>
          developed by <strong>Andy</strong> with <span>♥</span> for {' '}
          <a href="https://www.alura.com.br/">
            Imersão React Alura
          </a>
        </p>
      </FooterWrapper>
    );
} 