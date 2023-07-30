import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <Link to={'/'}>Todo-list</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
