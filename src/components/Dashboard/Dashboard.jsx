import React from 'react'
import Navbar from '../Navbar/Navbar'

const Dashboard = ({sideToggle, setSideToggle}) => {
  return (
    <div className={`${sideToggle ? "" : "ml-64"} w-full`}>
      <Navbar sideToggle={sideToggle} setSideToggle={setSideToggle}/>
    </div>
  )
}

export default Dashboard