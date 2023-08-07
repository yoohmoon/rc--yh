import React, { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import { Room } from './RoomMainSection';

interface MapSectionProps {
  roomData: Room | undefined;
}

const MapSection: React.FC<MapSectionProps> = ({ roomData }) => {
  //   const mapKey = process.env.REACT_APP_KAKAO_MAP_KEY;

  const roomAddress = roomData?.room?.fullAddress;

  const [state, setState] = useState({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    let callback = function (result: any[], status: string) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
          isPanto: state.isPanto,
        });
      }
    };

    if (roomAddress) {
      geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', callback);
    }
  }, [roomAddress]);

  return (
    <Container>
      <section>
        <Title>호스팅 지역</Title>
        <Address>{roomAddress}</Address>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: '100%', height: '360px' }}
          level={3}
        >
          <MapMarker position={{ lat: 33.5563, lng: 126.79581 }}>
            <MapBubble>정확한 위치는 예약 완료 후 표시됩니다.</MapBubble>
          </MapMarker>
          {/* <CustomOverlayMap position={{ lat: 33.5563, lng: 126.79581 }}>
            <MapBubble className='overlay'>
              정확한 위치는 예약 완료 후 표시됩니다.
            </MapBubble>
          </CustomOverlayMap> */}
        </Map>
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
