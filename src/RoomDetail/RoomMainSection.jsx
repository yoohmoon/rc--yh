import React from 'react';
import { useParams } from 'react-router-dom';

const RoomMainSection = () => {
  const params = useParams();
  const roomId = params.roomId;

  return <div>Room Id is...{roomId}</div>;
};

export default RoomMainSection;
