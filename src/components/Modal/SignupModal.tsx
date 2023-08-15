import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { styled } from 'styled-components';
import LoginInput from './components/LoginInput';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonContainer,
  IconWrapper,
  MainSection,
  ModalHeader,
  SeparatorWrapper,
  StyledCloseIcon,
} from './index.styles';
import { ModalStep } from './components/LoginModal';

type SignupProps = {
  setModalStep: React.Dispatch<React.SetStateAction<ModalStep>>;
};

const SignupModal = ({ setModalStep }: SignupProps) => {
  return (
    <>
      <ModalHeader>
        <IconWrapper
          onClick={() => {
            // setOpenLoginModal(false);
            setModalStep(ModalStep.LoginEmail);
          }}
        >
          <StyledCloseIcon icon={faChevronLeft} size='sm' />
        </IconWrapper>
        <h5>회원가입 완료하기</h5>
      </ModalHeader>
      <MainSection>
        <form>
          <LoginInput />
          <LoginInput />
          <LoginInput />
          <LoginInput />
        </form>
        <SeparatorWrapper>
          <div></div>
        </SeparatorWrapper>
        <ButtonContainer>
          {/* <Button bgc='#e00b40ec' funcClick={setModalStep}> */}
          {/* 동의 및 계속하기 */}
          {/* </Button> */}
        </ButtonContainer>
      </MainSection>
    </>
  );
};

export default SignupModal;
