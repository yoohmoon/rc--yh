import React from 'react';
import { styled } from 'styled-components';
import { formatPrice } from '../../../utils/formatPrice';

interface CardData {
  id: number;
  address: string;
  distance: string;
  date: string;
  price: number;
  images: string[];
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <CardContainer>
      {/* <ImgBox> */}
      <ImgContainer url={data.images[0]} />
      {/* </ImgBox> */}
      <TextWrapper>
        <DescContainer>
          <Address>{data.address}</Address>
          <div>{data.distance}</div>
          <div>{data.date}</div>
        </DescContainer>
        <Price>
          ₩{formatPrice(data.price)} <span>/박</span>
        </Price>
      </TextWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  /* display: grid;
  grid-template-rows: 2fr 1fr; */
  /* grid-auto-rows: 100px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* border: 1px solid #e0e0e0; */
  /* overflow: hidden; */
  width: 100%;
  cursor: pointer;
  padding-bottom: 35px;
`;

const ImgContainer = styled.div<{ url: string }>`
  width: 100%;
  height: 0;
  padding-bottom: 95%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
`;

const ImgBox = styled.div``;

const TextWrapper = styled.div``;

const DescContainer = styled.div`
  margin: 10px 0;
  line-height: 20px;

  div {
    color: ${(props) => props.theme.darkGray};
  }
`;

const Address = styled.h5`
  display: -webkit-box;
  -webkit-line-clamp: 1; //표시할 최대 줄 수
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
`;

const Price = styled.p`
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

export default Card;
