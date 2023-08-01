import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import HeadNav from './HeadNav';
import FilterNav from './FilterNav';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <HeaderWrapper scrollY={scrollY}>
      <HeadNav isDetail={false} />
      <FilterNav scrollY={scrollY} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ scrollY: number }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  height: ${(props) => (props.scrollY > 28 ? '160px' : '180px')};
  background-color: #fff;
  box-shadow: ${(props) =>
    props.scrollY > 28 ? `0 1px 4px ${props.theme.borderGray}` : ''};
  transition: height 0.01s ease-in-out;
`;

export default Header;
