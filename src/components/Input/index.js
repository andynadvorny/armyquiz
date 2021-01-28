/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 7px 15px;
    margin: 25px 0;
    
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    background-color: transparent;
    
    color: ${({ theme }) => theme.colors.white};
    font-family: Lato, sans-serif;
    font-size: 14px;
    line-height: 22px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
