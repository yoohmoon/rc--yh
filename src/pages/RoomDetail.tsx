import React from 'react';
import HeadNav from '../components/Header/HeadNav';
import { styled } from 'styled-components';
import Modal from '../components/Modal/Modal';
import RoomMainSection from '../RoomDetail/RoomMainSection';
import LoginModal from '../components/Modal/components/LoginModal';

const RoomDetail = () => {
  return (
    <Container>
      <Modal content={<LoginModal />} />
      <NavWrapper>
        <HeadNav isDetail={true} />
      </NavWrapper>
      <RoomMainSection />
    </Container>
  );
};

const Container = styled.div``;

const NavWrapper = styled.div`
  padding: 0 116px;
  border-bottom: 1px solid ${({ theme }) => theme.color.spLightGray};
`;

export default RoomDetail;
