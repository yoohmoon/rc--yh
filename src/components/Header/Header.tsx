import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import HeadNav from './HeadNav';
import FilterNav from './FilterNav';

export interface NavBarProps {
  scrollPoint?: number;
  page: string;
}

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScrollEvent);
    console.log('scrollY', scrollY);
  }, []);

  return (
    <HeaderWrapper scrollY={scrollY}>
      <HeadNav />
      <FilterNav />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ scrollY: number }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  height: 180px;
  background-color: #fff;
  box-shadow: ${(props) =>
    props.scrollY > 28 ? `0 1px 4px ${props.theme.borderGray}` : ''};
`;

export default Header;
