import React from 'react';
import { styled } from 'styled-components';
import HeadNav from './HeadNav';
import FilterNav from './FilterNav';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeadNav />
      <FilterNav />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 180px;
  background-color: #fff;
`;

export default Header;
