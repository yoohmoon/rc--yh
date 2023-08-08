import React from 'react';
import { styled } from 'styled-components';

const NaverLogo = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      aria-hidden='true'
      role='presentation'
      focusable='false'
    >
      <path
        fill='#03c75a'
        d='M19.92 16.77 11.76 5H5v22h7.08V15.22L20.24 27H27V5h-7.08z'
      ></path>
    </Svg>
  );
};

const Svg = styled.svg`
  display: block;
  height: 20px;
  width: 20px;
`;

export default NaverLogo;
