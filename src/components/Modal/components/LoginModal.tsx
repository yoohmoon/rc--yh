import React, { useState } from 'react';
import { styled } from 'styled-components';
import LoginInput from './LoginInput';
import Button from '../../Button';
import NaverLogo from './NaverLogo';
import FacebookLogo from './FacebookLogo';
import GoogleLogo from './GoogleLogo';
import AppleLogo from './AppleLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faX } from '@fortawesome/free-solid-svg-icons';
import SignupModal from '../SignupModal';
import { useSetRecoilState } from 'recoil';
import loginModal from '../../../store/loginModal';

export enum ModalStep {
  LoginEmail,
  LoginPassword,
  Signup,
}

const LoginModal = () => {
  const setOpenLoginModal = useSetRecoilState(loginModal);

  const [modalStep, setModalStep] = useState(ModalStep.LoginEmail);
  const handleNextBtn = () => {
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

  return <div> {renderModalContent()}</div>;
};

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

export default LoginModal;
