import React from 'react';
import { useParams } from 'react-router-dom';
import RoomHeader from './RoomHeader';
import { styled } from 'styled-components';
import MapSection from './MapSection';

const RoomMainSection = () => {
  const params = useParams();
  const roomId = params.roomId;

  return (
    <Container>
      <RoomHeader />
      Room Id is...{roomId}
      <Separator></Separator>
      <MapSection />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 80px;
  padding-top: 24px;
  margin: 0 116px;

  color: ${({ theme }) => theme.color.mainBlack};
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.borderGray};
`;

export default RoomMainSection;
