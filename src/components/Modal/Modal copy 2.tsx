import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import loginModal from '../../store/loginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faMobileScreenButton,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import FacebookLogo from './components/FacebookLogo';
import LoginInput from './components/LoginInput';
import NaverLogo from './components/NaverLogo';
import GoogleLogo from './components/GoogleLogo';
import AppleLogo from './components/AppleLogo';
import SignupModal from './SignupModal';

export enum ModalStep {
  LoginEmail,
  LoginPassword,
  Signup,
}

const Modal = () => {
  const [modalStep, setModalStep] = useState(ModalStep.LoginEmail);
  const handleNextBtn = () => {
    // e.preventDefault();
    switch (modalStep) {
      case ModalStep.LoginEmail:
        setModalStep(ModalStep.Signup);
        break;
    }
  };
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const renderModalContent = () => {
    switch (modalStep) {
      case ModalStep.LoginEmail:
        return (
          <>
            <ModalHeader>
              <IconWrapper
                onClick={() => {
                  setOpenLoginModal(false);
                }}
              >
                <StyledCloseIcon icon={faX} size='sm' />
              </IconWrapper>
              <h5>로그인 또는 회원가입</h5>
            </ModalHeader>
            <MainSection>
              <WelcomeMsg>에어비앤비에 오신 것을 환영합니다.</WelcomeMsg>
              <form onSubmit={handleForm}>
                <LoginInput />
                <ButtonContainer>
                  <Button bgc='#e00b40ec' funcClick={handleNextBtn}>
                    계속
                  </Button>
                </ButtonContainer>
              </form>
              <SeparatorWrapper>
                <div></div>
                <span>또는</span>
              </SeparatorWrapper>

              {/* 👉 map 이용해서 코드 줄여보는 것 시도해보기 */}
              <ButtonWrapper>
                <Button icon={<NaverLogo />} border={true}>
                  네이버로 로그인하기
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button icon={<FacebookLogo />} border={true}>
                  페이스북으로 로그인하기
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button icon={<GoogleLogo />} border={true}>
                  구글로 로그인하기
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button icon={<AppleLogo />} border={true}>
                  애플로 로그인하기
                </Button>
              </ButtonWrapper>
              <ButtonsBox>
                <ButtonWrapper>
                  <Button
                    icon={
                      <FontAwesomeIcon icon={faMobileScreenButton} size='lg' />
                    }
                    border={true}
                  >
                    전화번호로 로그인하기
                  </Button>
                </ButtonWrapper>
              </ButtonsBox>
            </MainSection>
          </>
        );
      case ModalStep.Signup:
        return <SignupModal setModalStep={setModalStep} />;
    }
  };

  const [openLoginModal, setOpenLoginModal] = useRecoilState(loginModal);
  // ➕ 모달 창 오픈 시, 배경 스크롤 막기 기능 추가
  useEffect(() => {
    if (openLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openLoginModal]);

  const closeModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <Container modalState={openLoginModal} onClick={closeModal}>
      <ModalContainer
        modalState={openLoginModal}
        onClick={(e) => {
          // ✔️ 모달 내부 클릭 시, 모달 닫히는 버그 수정
          e.stopPropagation();
        }}
      >
        {renderModalContent()}
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 40px 0;
  /* margin: 0 auto; */
`;

const ModalContainer = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? 'block' : 'none')};
  width: 570px;

  max-height: 80vh;
  background-color: #fff;
  border-radius: 12px;

  // ✔ 아래에서 위로 등장하는 애니메이션 효과 추가
  animation: showModal 0.4s;

  @keyframes showModal {
    0% {
      visibility: hidden;
      transform: translateY(100%);
    }
    100% {
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.header`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};

  h5 {
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7.5px;
  left: 9.5px;
`;

const MainSection = styled.section`
  max-height: 70vh;
  padding: 20px 20px;
  padding-bottom: 0;

  color: ${({ theme }) => theme.color.mainBlack};

  overflow-y: auto;
`;

const WelcomeMsg = styled.h4`
  margin: 8px 0 24px 0;
  font-size: 22px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin: 16px 0 24px 0;
`;

const SeparatorWrapper = styled.div`
  position: relative;
  margin: 16px 0;

  div {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  span {
    position: absolute;
    top: -5px;
    left: 240px;
    background-color: #fff;
    font-size: 12px;
    padding: 0 15px;
    color: ${({ theme }) => theme.color.mainBlack};
  }
`;

const ButtonsBox = styled.div``;
const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

export default Modal;
