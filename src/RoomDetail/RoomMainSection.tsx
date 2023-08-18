import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomHeader from './RoomHeader';
import { styled } from 'styled-components';
import MapSection from './MapSection';

export type Room = {
  id: number;
  address: string;
  distance: string;
  date: string;
  price: number;
  images: string[];
  category: {
    id: number;
    title: string;
  };
  title: string;
  rating: null | number;
  superhost: boolean;
  reviews: number;
  host: {
    name: string;
  };
  room: {
    fullAddress: string;
    type: string;
    max: number;
    bedroom: number;
    bed: number;
    bathroom: number;
  };
};

const RoomMainSection = () => {
  const params = useParams();

  let roomId: number | undefined;
  if (params.roomId !== undefined) {
    roomId = parseInt(params.roomId);
  }

  const [roomData, setRoomData] = useState<Room | undefined>();

  useEffect(() => {
    fetch('/data/roomData.json')
      .then((res) => res.json())
      .then((data: Room[]) => {
        const selectedRoom = data.find((room) => room.id === roomId);
        setRoomData(selectedRoom);
      });
  }, [roomId]);

  return (
    <Container>
      <RoomHeader />
      Room Id is...{roomId}
      <Separator></Separator>
      <MapSection roomData={roomData} />
      <Separator />
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
