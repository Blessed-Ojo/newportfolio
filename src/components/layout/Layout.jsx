import React from 'react';
import Navbar from '../navabr/Navbar';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import Footer from '../../sections/footer/Footer'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <hr className="hr"/>
      <main>
      <Outlet />
      </main>
      <Footer className='footr'/>
    </div>
  );
};

export default Layout;
