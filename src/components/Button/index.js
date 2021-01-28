/* eslint-disable linebreak-style */
import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = styled.button`
    width: 100%;
    padding: 10px 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    outline: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    
    color: ${({ theme }) => theme.colors.white};
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1.25px;

    cursor: pointer;
    transition: .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.grayLight};
        cursor: not-allowed;
    }
`;

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: propTypes.oneOf(['submit', 'type', 'button']),
  children: propTypes.node.isRequired,
};

export default Button;
