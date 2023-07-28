import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface CardData {
  id: number;
  address: string;
  distance: string;
  date: string;
  price: number;
  images: string[];
}

const Card = () => {
  const [cardData, setCardData] = useState<CardData[] | null>([]);

  useEffect(() => {
    fetch('/data/roomData.json', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!cardData) return <div>Loading...</div>;

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
  console.log(typeof cardData);

  return (
    <>
      {cardData.map((item) => (
        <CardContainer key={item.id}>
          <ImgContainer>
            <img src={item.images[0]} alt={item.address} />
          </ImgContainer>
          <TextWrapper>
            <DescContainer>
              <Address>{item.address}</Address>
              <div>{item.distance}</div>
              <div>{item.date}</div>
            </DescContainer>
            <Price>
              ₩{formatPrice(item.price)} <span>/박</span>
            </Price>
          </TextWrapper>
        </CardContainer>
      ))}
    </>
  );
};

const CardContainer = styled.div``;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 320px;
    height: 304px;
    border-radius: 12px;
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
