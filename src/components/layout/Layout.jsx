import React from 'react';
import Navbar from '../navabr/Navbar';
import { Outlet } from 'react-router-dom';
import './layout.scss'; // Optional: Include SCSS for Layout styling

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
      <Outlet />
      </main>
    </div>
  );
};

export default Layout;
