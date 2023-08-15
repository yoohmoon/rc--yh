import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './pages/Main';
import { useRecoilValue } from 'recoil';
import { localeState } from './store/langOptions';
import enUsMsg from './lang/en-US.json';
import koMsg from './lang/ko.json';
import Rooms from './pages/RoomDetail';

const App = () => {
  const locale = useRecoilValue(localeState);
  const messages = { 'en-US': enUsMsg, ko: koMsg }[locale];

  return (
    <Router>
      <GlobalStyle />
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/rooms/:roomId' element={<Rooms />} />
          </Routes>
        </ThemeProvider>
      </IntlProvider>
    </Router>
  );
};

export default App;
