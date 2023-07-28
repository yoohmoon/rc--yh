import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { styled } from 'styled-components';

interface CardData {
  id: number;
  address: string;
  distance: string;
  date: string;
  price: number;
  images: string[];
}

const MainSection = () => {
  const [cardsData, setCardsData] = useState<CardData[] | null>([]);

  useEffect(() => {
    fetch('/data/roomData.json', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardsData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!cardsData) return <div>Loading...</div>;

  return (
    <Container>
      <Grid>
        {cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.main`
  padding: 0 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-rows: 400px; */
  /* grid-gap: 20px; */
  grid-column-gap: 20px;
`;

export default MainSection;
