import React from 'react';
import { styled } from 'styled-components';

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
  const formatPrice = (price: number) => {
    let priceStr = price?.toString();
    let priceArr = priceStr?.split('').reverse();

    let formattedPrice = '';
    for (let i = 0; i < priceArr?.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedPrice = ',' + formattedPrice;
        console.log(formattedPrice);
      }
      formattedPrice = priceArr[i] + formattedPrice;
      console.log('in question! ', i, formattedPrice);
    }

    return formattedPrice;
  };

  console.log(formatPrice(159000));

  return (
    <CardContainer>
      <ImgContainer>
        <img src={data.images[0]} alt={data.address} />
      </ImgContainer>
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
  display: grid;
  grid-template-rows: 2fr 1fr;
  /* grid-auto-rows: 100px; */
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
  /* border: 1px solid #e0e0e0; */
  /* overflow: hidden; */
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */

  img {
    /* width: 320px; */
    /* height: 304px; */
    border-radius: 12px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const TextWrapper = styled.div``;

const DescContainer = styled.div`
  margin: 10px 0;
  line-height: 20px;

  div {
    color: ${(props) => props.theme.darkGray};
  }
`;

const Address = styled.h5`
  font-weight: 700;
`;

const Price = styled.p`
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

export default Card;
