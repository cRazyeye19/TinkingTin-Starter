import React, { useState } from 'react'
import Table from '../../components/Table/Table';
import Sidebar from '../../components/Sidebar/Sidebar';
import Dashboard from '../../components/Dashboard/Dashboard';

export const User = () => {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className='grid grid-cols-1'>
      <div className='flex z-10'>
        <Sidebar sideToggle={sideToggle} />
        <Dashboard sideToggle={sideToggle} setSideToggle={setSideToggle} />
      </div>
      <Table />
    </div>
  )
}

export default User;
