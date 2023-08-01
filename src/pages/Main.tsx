import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/Main/MainSection';
import Modal from '../components/Modal/Modal';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Modal />
      <Header />
      <MainSection />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Main;
