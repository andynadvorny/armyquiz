/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Widget = styled.div`
  margin: 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.grayDark};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Loader = styled.div`
  display: flex;
  justify-content: center;
`;

Widget.Topic = styled.a`
  display: block;
  padding: 10px 15px;
  margin-bottom: 8px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.contrastText}40`};

  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
