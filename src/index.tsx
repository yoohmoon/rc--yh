import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rooms from './pages/RoomDetail';
import Main from './pages/Main';
import { IntlProvider } from 'react-intl';
import enUsMsg from './lang/en-US.json';
import koMsg from './lang/ko.json';

// const router = createBrowserRouter([
//   { path: '/', element: <TodoList /> },
//   { path: '/main/:id', element: <MainSection /> },
//   // { path: '/c', element: <Class /> },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const locale = localStorage.getItem('locale') ?? 'ko';
const messages = { 'en-US': enUsMsg, ko: koMsg }[locale];

root.render(
  <Router>
    <RecoilRoot>
      <GlobalStyle />
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/rooms/:roomId' element={<Rooms />} />
          </Routes>
        </ThemeProvider>
      </IntlProvider>
    </RecoilRoot>
  </Router>
);
