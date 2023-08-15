import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/Main/MainSection';
import Modal from '../components/Modal/Modal';
import { styled } from 'styled-components';
import LoginModal from '../components/Modal/components/LoginModal';
import { useRecoilValue } from 'recoil';
import modalType from '../store/modalType';
import LangModal from '../components/Modal/components/LangModal';

const Main = () => {
  // const [modalTypeState, setModalTypeState] = useRecoilState(modalType);

  const modalTypeState = useRecoilValue(modalType);

  return (
    <Container>
      {modalTypeState === 'USER' && (
        <Modal content={<LoginModal />} title='로그인 또는 회원가입' />
      )}
      {modalTypeState === 'LANG' && <Modal content={<LangModal />} />}

      <Header />
      <MainSection />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Main;
