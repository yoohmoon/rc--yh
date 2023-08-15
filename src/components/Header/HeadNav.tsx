import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Logo from './Logo';
import Lang from './Lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import loginModal from '../../store/loginModal';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import modalType, { ModalTypes } from '../../store/modalType';

export interface HeadNavProps {
  isDetail: boolean;
}

const HeadNav: React.FC<HeadNavProps> = ({ isDetail }) => {
  const [modalTypeState, setModalTypeState] = useRecoilState(modalType);

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

  const handleModalButtons =
    (type: ModalTypes) => (event: React.MouseEvent) => {
      setOpenLoginModal(!openLoginModal);
      setShowUserDropdown(false);
      setModalTypeState(type);
    };

  return (
    <HeaderContainer isDetail={isDetail}>
      <LogoBox>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoBox>
      <SearchBar isDetail={isDetail}>
        {isDetail ? '검색 시작하기' : '게스트 추가'}
      </SearchBar>
      <NavLinks>
        <ul>
          <HostBox>당신의 공간을 에어비앤비하세요</HostBox>
          <LangBox onClick={handleModalButtons('LANG')}>
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
          <li onClick={handleModalButtons('USER')}>회원가입</li>
          <li onClick={handleModalButtons('USER')}>로그인</li>
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

const HeaderContainer = styled.div<HeadNavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 80px;
  border-bottom: ${(props) =>
    props.isDetail ? 'none' : `1px solid ${props.theme.color.spLightGray}`};
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
    background-color: ${({ theme }) => theme.color.bgLightGray};
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
    background-color: ${({ theme }) => theme.color.bgLightGray};
  }
`;

const UserNav = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 45px;
  padding: 5px 5px 5px 12px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 80px;
  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.28);
    transition: box-shadow 0.3s;
  }

  .barsIcon {
    color: ${({ theme }) => theme.color.mainBlack};
  }

  .userIcon {
    color: ${({ theme }) => theme.color.darkGray};
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
