import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import loginModal from '../../store/loginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import FacebookLogo from './FacebookLogo';

const Modal = () => {
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
        <ModalHeader>
          <IconWrapper>
            <StyledCloseIcon
              icon={faX}
              size='sm'
              onClick={() => {
                setOpenLoginModal(false);
              }}
            />
          </IconWrapper>
          <h5>로그인 또는 회원가입</h5>
        </ModalHeader>
        <MainSection>
          <h4>에어비앤비에 오신 것을 환영합니다</h4>
          <Button bgc='#e00b40ec'>계속</Button>
          {/* <Button
            icon={<FontAwesomeIcon icon={faEnvelope} size='lg' />}
            border={true}
          >
            이메일로 로그인하기
          </Button>
          <Button icon={<FacebookLogo />} border={true}>
            페이스북으로 로그인하기
          </Button> */}
        </MainSection>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState ? 'flex' : 'none')};
  justify-content: center;

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
  /*  */
  height: 600px;
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
  border-bottom: 1px solid ${(props) => props.theme.borderGray};

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

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7.5px;
  left: 9.5px;
  cursor: pointer;
`;

const MainSection = styled.section`
  padding: 20px 20px;
`;

export default Modal;
