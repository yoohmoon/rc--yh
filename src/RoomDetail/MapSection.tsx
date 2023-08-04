import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import theme from '../styles/theme';

const MapSection = () => {
  //   const mapKey = process.env.REACT_APP_KAKAO_MAP_KEY;

  return (
    <Container>
      <Title>호스팅 지역</Title>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
        level={3}
      >
        <MapMarker position={{ lat: 33.5563, lng: 126.79581 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Container>
  );
};

const Container = styled.div`
  padding: 48px 0;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.headerMd};
  font-weight: 700;
`;

export default MapSection;
