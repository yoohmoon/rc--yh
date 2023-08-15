import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { localeState, selectedLangIdState } from '../../../store/langOptions';

type LangProps = {
  key: number;
  itemId: number;
  selectedLangId: number;
};

const LangModal = () => {
  const [selectedLangId, setSelectedLangId] =
    useRecoilState(selectedLangIdState);
  const [locale, setLocale] = useRecoilState(localeState);
  // const [locale, setLocale] = useState(localStorage.getItem('locale') ?? 'ko');
  // const [selectedLangId, setSelectedLangId] = useState(1);

  useEffect(() => {}, [locale]);

  const selectLangOpt =
    (id: number, lang: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setLocale(lang);
      localStorage.setItem('locale', lang);

      // 클릭된 아이디로 보더 색상 주는 코드
      setSelectedLangId(id);

      // window.location.reload();
    };

  return (
    <LangMainContainer>
      <LangTitle>
        <FormattedMessage id='lang' />
      </LangTitle>
      <LangList>
        {LANG_DATA.map((item) => (
          <LangItem
            key={item.id}
            itemId={item.id}
            selectedLangId={selectedLangId}
          >
            <button onClick={selectLangOpt(item.id, item.locale)}>
              <div>{item.language}</div>
              <Country>{item.country}</Country>
            </button>
          </LangItem>
        ))}
      </LangList>
    </LangMainContainer>
  );
};

const LangMainContainer = styled.div`
  margin-top: 20px;
  padding: 0 24px 24px 24px;
  color: ${({ theme }) => theme.color.mainBlack};
`;

const LangTitle = styled.h3`
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 700;
`;

const LangList = styled.ul`
  font-size: 14px;
  margin: -8px;
  /* width: 100%; */
`;

const LangItem = styled.li<LangProps>`
  display: inline-block;
  padding: 8px;

  button {
    border: ${(props) =>
      props.selectedLangId === props.itemId
        ? `1px solid ${props.theme.color.mainBlack}`
        : `none`};
    border-radius: 7px;
    display: inline-block;
    width: 10vw;
    padding: 9px 12px;
    text-align: left;
    line-height: 19px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Country = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
`;

export default LangModal;

const LANG_DATA = [
  { id: 1, language: '한국어', country: '대한민국', locale: 'ko' },
  { id: 2, language: 'English', country: 'United States', locale: 'en-US' },
];
