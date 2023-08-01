import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Logo from './Logo';
import Lang from './Lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import loginModal from '../../store/loginModal';

const HeadNav = () => {
  // ✅ UserDropdown UI 외부 클릭 시, 닫히기 기능
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const userButtonRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    const clickOutsideUserMenu = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node) &&
        // ✔️ userButton 클릭 시, 메뉴가 제대로 닫히지 않고 다시 열리는 버그 수정
        !userButtonRef.current?.contains(e.target as Node)
      ) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideUserMenu);

    return () => {
      document.removeEventListener('mousedown', clickOutsideUserMenu);
    };
  }, []);

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const handleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const [openLoginModal, setOpenLoginModal] = useRecoilState(loginModal);
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
    setShowUserDropdown(false);
  };

  return (
    <HeaderContainer>
      <LogoBox>
        <Logo />
      </LogoBox>
      <SearchBar>
        <DestBtn>어디든지</DestBtn>
        <Separator></Separator>
        <DateBtn>어디든 일주일</DateBtn>
        <Separator></Separator>
        <GuestBtn>
          <IconWrapper>
            <GuestText>게스트 추가</GuestText>
            <GlassBox>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className='magnifying'
              />
            </GlassBox>
          </IconWrapper>
        </GuestBtn>
      </SearchBar>
      <NavLinks>
        <ul>
          <HostBox>당신의 공간을 에어비앤비하세요</HostBox>
          <LangBox>
            <Lang />
          </LangBox>
          <UserNav onClick={handleUserDropdown} ref={userButtonRef}>
            <FontAwesomeIcon icon={faBars} size='lg' className='barsIcon' />
            <FontAwesomeIcon
              icon={faCircleUser}
              size='2xl'
              className='userIcon'
            />
          </UserNav>
        </ul>
        <UserMenu showUserDropdown={showUserDropdown} ref={userMenuRef}>
          <li onClick={handleLoginModal}>회원가입</li>
          <li onClick={handleLoginModal}>로그인</li>
          <div>
            <hr />
          </div>

          <li>
            <a href='https://www.airbnb.co.kr/host/homes'>
              당신의 공간을 에어비앤비하세요
            </a>
          </li>
          <li>
            <a href='https://www.airbnb.co.kr/help?audience=guest'>도움말</a>
          </li>
        </UserMenu>
      </NavLinks>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 80px;
  border-bottom: 1px solid ${(props) => props.theme.spLightGray};
`;

const LogoBox = styled.div`
  flex-grow: 1;
  flex-basis: 140px;

  @media screen and (max-width: 1130px) {
    flex-basis: auto;
  }

  @media screen and (max-width: 950px) {
    flex-grow: 0;
    flex-basis: auto;
  }
`;

const SearchBar = styled.div`
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.borderGray};
  border-radius: 50px;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s;
  }
`;

const NavLinks = styled.nav`
  flex-grow: 1;
  flex-basis: 140px;
  /* flex-basis: auto; */
  position: relative;

  @media screen and (max-width: 1130px) {
    flex-basis: auto;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

const GuestText = styled.div`
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
  background-color: ${(props) => props.theme.brandPink};

  .magnifying {
    color: #fff;
    text-align: center;
  }
`;

const Separator = styled.span`
  width: 1px;
  height: 25px;
  border: 0.05px solid ${(props) => props.theme.borderGray};
  background-color: ${(props) => props.theme.borderGray};
`;

const HostBox = styled.li`
  height: 45px;
  line-height: 24px;
  padding: 12px;
  border-radius: 80px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.bgLightGray};
  }
`;
const LangBox = styled.li`
  height: 45px;
  line-height: 25px;
  border-radius: 50%;
  padding: 12px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.bgLightGray};
  }
`;

const UserNav = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 45px;
  padding: 5px 5px 5px 12px;
  border: 1px solid ${(props) => props.theme.borderGray};
  border-radius: 80px;
  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.28);
    transition: box-shadow 0.3s;
  }

  .barsIcon {
    color: ${(props) => props.theme.mainBlack};
  }

  .userIcon {
    color: ${(props) => props.theme.darkGray};
  }
`;

const UserMenu = styled.div<{ showUserDropdown: boolean }>`
  position: absolute;
  top: 55px;
  right: 0;
  z-index: 2;
  display: ${(props) => (props.showUserDropdown ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-evenly;
  width: 240px;
  height: 220px;
  border-radius: 12px;
  background-color: #fff;
  /* box-shadow: 6px 10px 14px rgba(0, 0, 0, 0.28); */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  padding: 7px 0;

  li {
    display: flex;
    align-items: center;
    height: 80px;
    padding-left: 15px;
    font-size: 14px;

    a {
      width: 100%;
      line-height: 47px;
      height: 100%;
    }

    &:first-child {
      font-weight: 700;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }
  }
`;

export default HeadNav;
