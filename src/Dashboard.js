import React from 'react';
import Sidebar from './Dashboard/SideBar.js'
import Content from './Dashboard/Content.js'
import Meet from './Dashboard/Meet.js'

const DashBoard = () => {
  return (
    <div className='d-flex mb-5'>
      <Sidebar />
      <div className='d-flex flex-column flex-md-row'>
      <Content />
      <Meet />
      </div>
     
    </div>
  );
};

export default DashBoard;
