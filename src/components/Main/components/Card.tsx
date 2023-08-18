import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import HeartSvg from './HeartSvg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import loginModal from '../../../store/loginModal';
import modalType, { ModalTypes } from '../../../store/modalType';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import axios from 'axios';
import { convertedPrice } from '../../../utils/convertPrice';

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

interface CurrencyResponse {
  date: string;
  usd: number;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [openLoginModal, setOpenLoginModal] = useRecoilState(loginModal);
  const setModalTypeState = useSetRecoilState(modalType);
  const handleHeartBtn =
    (type: ModalTypes) => (e: React.MouseEvent<HTMLButtonElement>) => {
      // ➡️ 커링(currying) :
      // handleHeartBtn 함수는 첫 번째 인수로 type: ModalTypes를 받고, 그 결과로 이벤트 객체를 인자로 하는 또 다른 함수를 반환
      e.preventDefault();
      // ✅ Link 태그의 페이지 이동 기본 동작이 이벤트 버블링 되어 버튼 태그의 기본 동작이 됐는데, 이걸 방지해줌.
      setOpenLoginModal(!openLoginModal);
      setModalTypeState(type);
    };

  const intl = useIntl();

  const [dollarCurrency, setDollarCurrency] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<CurrencyResponse>(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/krw/usd.min.json'
      )
      .then((res) => setDollarCurrency(res.data.usd))
      .catch((error) =>
        console.error('Error has occurred in fetching currency data', error)
      );
  }, [intl.locale]);

  return (
    <CardContainer>
      <ImgBox>
        <ImgContainer url={data.images[0]} />
        <HeartBtn onClick={handleHeartBtn('USER')}>
          <HeartSvg />
        </HeartBtn>
      </ImgBox>
      <TextWrapper>
        <DescContainer>
          <Address>{data.address}</Address>
          <div>
            {data.distance}
            <FormattedMessage id='distance.unit' />
          </div>
          <div>{data.date}</div>
        </DescContainer>
        <Price>
          <FormattedNumber
            value={convertedPrice(data.price, dollarCurrency, intl.locale)}
            style='currency'
            currencyDisplay='symbol'
            currency={intl.formatMessage({ id: 'currency.unit' })}
          />
          <span>
            {` / `}
            <FormattedMessage id='day.unit' />
          </span>
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

const ImgBox = styled.div`
  position: relative;
`;

const HeartBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  &:active {
    transform: scale(0.93);
    transition: tranform 0.6s ease-in-out;
  }
`;

const TextWrapper = styled.div``;

const DescContainer = styled.div`
  margin: 10px 0;
  line-height: 20px;

  div {
    color: ${({ theme }) => theme.color.darkGray};
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
