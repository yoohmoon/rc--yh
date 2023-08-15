import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

// const router = createBrowserRouter([
//   { path: '/', element: <TodoList /> },
//   { path: '/main/:id', element: <MainSection /> },
//   // { path: '/c', element: <Class /> },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// function RootComponent() {
//   const locale = useRecoilValue(localeState);
//   const messages = { 'en-US': enUsMsg, ko: koMsg }[locale];

//   return (
//     <Router>
//       <GlobalStyle />
//       <IntlProvider locale={locale} messages={messages}>
//         <ThemeProvider theme={theme}>
//           <Routes>
//             <Route path='/' element={<Main />} />
//             <Route path='/rooms/:roomId' element={<Rooms />} />
//           </Routes>
//         </ThemeProvider>
//       </IntlProvider>
//     </Router>
//   );
// }

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
