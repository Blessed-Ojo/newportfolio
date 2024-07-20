import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home'
import Blog from './components/blog/Blog'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

