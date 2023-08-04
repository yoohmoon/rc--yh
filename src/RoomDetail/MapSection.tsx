import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Room } from './RoomMainSection';

interface MapSectionProps {
  roomData: Room | undefined;
}

const MapSection: React.FC<MapSectionProps> = ({ roomData }) => {
  //   const mapKey = process.env.REACT_APP_KAKAO_MAP_KEY;

  const roomAddress = roomData?.room?.fullAddress;

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 4,
    };

    let map: kakao.maps.Map | undefined = undefined;
    if (container !== null) {
      map = new kakao.maps.Map(container, options);
    }

    const geocoder = new kakao.maps.services.Geocoder();

    if (roomAddress) {
      geocoder.addressSearch(roomAddress, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(
            parseFloat(result[0].y),
            parseFloat(result[0].x)
          );

          let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          let infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:300px; text-align:center; padding: 6px;">정확한 위치는 예약 완료 후 표시됩니다.</div>',
          });

          if (map !== undefined) {
            infowindow.open(map, marker);
          }

          map?.setCenter(coords);
        }
      });
    }
  }, [roomAddress]);

  return (
    <Container>
      <section>
        <Title>호스팅 지역</Title>
        <Address>{roomAddress}</Address>
        <div id='myMap' style={{ width: '100%', height: '480px' }}></div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  padding: 48px 0;
`;

const Title = styled.h3`
  padding-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSize.headerMd};
  font-weight: 700;
`;

const Address = styled.p`
  margin-bottom: 24px;
`;

const MapBubble = styled.div`
  border: none;
  text-align: center;
  width: 100px;

  /* background-color: #fff; */
`;

export default MapSection;
