import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { styled } from 'styled-components';
import { HeadNavProps } from './HeadNav';

interface SearchBarProps {
  children: string;
}

const SearchBar: React.FC<HeadNavProps & SearchBarProps> = ({
  isDetail,
  children,
}) => {
  return (
    <SearchBarContainer>
      {!isDetail && (
        <>
          <DestBtn>어디든지</DestBtn>
          <Separator></Separator>
          <DateBtn>어디든 일주일</DateBtn>
          <Separator></Separator>
        </>
      )}

      <GuestBtn>
        <IconWrapper>
          <GuestText isDetail={isDetail}>{children}</GuestText>
          <GlassBox>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying' />
          </GlassBox>
        </IconWrapper>
      </GuestBtn>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 50px;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s;
  }
`;

const DestBtn = styled.button`
  flex-grow: 1;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const DateBtn = styled.button`
  flex-grow: 1;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const GuestBtn = styled.button`
  flex-grow: 2.6;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuestText = styled.div<HeadNavProps>`
  padding: 0 16px;
  color: ${({ theme }) => theme.color.mainBlack};
  font-weight: ${(props) => (props.isDetail ? '700' : '400')};
  font-size: ${(props) => props.isDetail && '14px'};

  @media screen and (max-width: 800px) {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const GlassBox = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  /* text-align: center; */
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.brandPink};

  .magnifying {
    color: #fff;
    text-align: center;
  }
`;

const Separator = styled.span`
  width: 1px;
  height: 25px;
  border: 0.05px solid ${({ theme }) => theme.color.borderGray};
  background-color: ${({ theme }) => theme.color.borderGray};
`;

export default SearchBar;
