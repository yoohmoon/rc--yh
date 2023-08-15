import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import loginModal from '../../store/loginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  content: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ content, title }) => {
  const [openLoginModal, setOpenLoginModal] = useRecoilState(loginModal);
  // ✔️ 모달 창 오픈 시, 배경 스크롤 막기 기능 추가
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
        <ModalHeader title={title}>
          <IconWrapper
            onClick={() => {
              setOpenLoginModal(false);
            }}
          >
            <StyledCloseIcon icon={faX} size='sm' />
          </IconWrapper>
          {title && <h5>{title}</h5>}
        </ModalHeader>
        {content}
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
  border-bottom: ${(props) =>
    props.title ? `1px solid ${props.theme.color.borderGray}` : `none`};

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

export default Modal;
