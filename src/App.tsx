import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Rooms from './pages/RoomDetail';
import { useRecoilValue } from 'recoil';
import { localeState } from './store/langOptions';
import { IntlProvider } from 'react-intl';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import enUsMsg from './lang/en-US.json';
import koMsg from './lang/ko.json';

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
