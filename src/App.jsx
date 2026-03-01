import React from 'react';
import Nav from './components/Nav';
import Foot from './components/Foot';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <Nav />
      <div> <Outlet /> </div>
      <Foot />
    </div>
  );
};

export default App;