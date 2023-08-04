import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
  faChevronLeft,
  faChevronRight,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TAB_DATA_LIST } from './data';

interface TabItemProps {
  slidePx: number;
}

const FilterNav = () => {
  const [slidePx, setSlidePx] = useState(0);

  const handlePrevBtn = () => {
    console.log(slidePx);

    if (slidePx < 0) setSlidePx(slidePx + 400);
  };
  const handleNextBtn = () => {
    // setSlidePx(-420);
    // 전체 아이템 개수를 알아야 몇번째에서 멈출지 알  수 있을 듯... 41개 *80-> 1805px
    // if (slidePx < -1300) return;
    if (slidePx > -1320) setSlidePx(slidePx - 410);
  };

  return (
    <FilterNavContainer>
      <PrevArrowBtn onClick={handlePrevBtn} slidePx={slidePx}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PrevArrowBtn>
      <TabList>
        {TAB_DATA_LIST.map((item) => (
          // <ItemWrapper>
          <TabItem key={item.id} slidePx={slidePx}>
            <TabImg src={item.src} alt={item.title} />
            <TabTitle>{item.title}</TabTitle>
          </TabItem>
          // </ItemWrapper>
        ))}
      </TabList>
      <NextArrowBtn onClick={handleNextBtn} slidePx={slidePx}>
        <FontAwesomeIcon icon={faChevronRight} />
      </NextArrowBtn>
      <FilterBtnWrapper>
        <FontAwesomeIcon icon={faFilter} />
        <span>필터</span>
      </FilterBtnWrapper>
    </FilterNavContainer>
  );
};

const FilterNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
`;

const TabList = styled.ul`
  flex-grow: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 35px;
  background-color: #ddd;

  //
  overflow: hidden;
`;

const ItemWrapper = styled.div``;

// 한개 width 약 56px + gap 35px => 91px
// 5개 이동시, 455px => 420px

// 캐러셀 하나의 아이템
const TabItem = styled.li<TabItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 56px; */
  gap: 9px;
  height: 100%;
  padding: 4px 0;

  /* transform: translateX(-420px); */
  transform: translateX(${(props) => props.slidePx}px);
  transition: translateX ease-in-out 0.6s;
`;

const TabImg = styled.img`
  width: 24px;
  height: 24px;
`;

const TabTitle = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
`;

const PrevArrowBtn = styled.button<TabItemProps>`
  display: ${(props) => (props.slidePx === 0 ? 'none' : 'inline-block')};
  /* display: ${(props) => props.slidePx}===0 ? 'none' : ''; */
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.color.borderGray};
  border-radius: 50%;
`;
const NextArrowBtn = styled.button<TabItemProps>`
  display: ${(props) => (props.slidePx === -1320 ? 'none' : 'inline-block')};
  /* display: ${(props) => props.slidePx}===0 ? 'none' : ''; */
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 50%;
`;

const FilterBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 45px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 10px;
`;

export default FilterNav;
