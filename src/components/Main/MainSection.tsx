import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import filterCategory from '../../store/filterCategory';

interface CardData {
  id: number;
  address: string;
  distance: string;
  date: string;
  price: number;
  images: string[];
  category: { id: number; title: string };
}

const MainSection = () => {
  const [cardsData, setCardsData] = useState<CardData[] | null>([]);

  useEffect(() => {
    fetch('/data/roomData.json', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setCardsData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [clickedFilterIndex, setClickedFilterIndex] =
    useRecoilState(filterCategory);

  if (!cardsData) return <div>Loading...</div>;

  const filteredRoomArr = cardsData.filter(
    (room) => room.category.id === clickedFilterIndex
  );
  if (filteredRoomArr.length === 0)
    return (
      <ErrorBox>
        <ErrorMsg>선택한 조건의 숙소가 없습니다.</ErrorMsg>
      </ErrorBox>
    );

  return (
    <Container>
      <div>
        <Grid>
          {filteredRoomArr.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

const Container = styled.main`
  padding: 0 80px;
  padding-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-rows: 400px; */
  /* grid-gap: 20px; */
  grid-column-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ErrorBox = styled.div`
  padding: 300px 80px;
  text-align: center;
`;

const ErrorMsg = styled.div``;

export default MainSection;
