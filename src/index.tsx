import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';
// import {
//   Link,
//   Route,
//   Router,
//   RouterProvider,
//   Routes,
//   createBrowserRouter,
// } from 'react-router-dom';
import TodoList from './lecture/todo/TodoList';
import MainSection from './components/Main/MainSection';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rooms from './pages/Rooms';
import Main from './pages/Main';

// const router = createBrowserRouter([
//   { path: '/', element: <TodoList /> },
//   { path: '/main/:id', element: <MainSection /> },
//   // { path: '/c', element: <Class /> },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Router>
  //   <div>
  //     <Link to={'/'}>TodoList</Link>
  //     <Link to={'/main'}>Main Page</Link>
  //     <Routes>
  //       <Route path='/' element={<TodoList />} />
  //       <Route path='/main' element={<MainSection />} />
  //     </Routes>
  //   </div>
  // </Router>
  // <RouterProvider router={router}>

  // </RouterProvider>

  <Router>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  </Router>
);
