/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    margin: 25px 0;
    padding: 7px 15px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    background-color: transparent;
    
    color: ${({ theme }) => theme.colors.white};
    font-family: Lato, sans-serif;
    font-size: 14px;
    line-height: 22px;
`;

export default Input;
