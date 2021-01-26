/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px 16px;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    
    color: ${({ theme }) => theme.colors.white};
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;

    cursor: pointer;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.grayLight};
        cursor: auto;
    }
`;

export default Button;
