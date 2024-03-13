import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfilePic from '../../images/pexels-mohamed-abdelghaffar-771742.jpg';

export const AdminNavbar = ({ sideToggle, setSideToggle }) => {
  return (
    <nav className='bg-cdf0ea px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
        <MenuIcon className='text-custom-black me-4 cursor-pointer' onClick={() => setSideToggle(!sideToggle)} />
        <span className='text-custom-black font-semibold'>Welcome, Admin</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='text-custom-black'><NotificationsIcon className='w-6 h-6' /></div>
        <div className='relative'>
          <img src={ProfilePic} alt="" className='w-6 h-6 mt-1 rounded-full' />
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar