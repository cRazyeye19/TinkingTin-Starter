import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const AdminSidebar = ({ sideToggle }) => {
    return (
        <div className={`${sideToggle ? "hidden" : "block"} w-64 bg-cdf0ea fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2x text-custom-black font-bold '>TinkingTin</h1>
            </div>
            <hr />
            <ul className='mt-3 text-custom-black font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-custom-grey py-2'>
                    <a href="" className='px-3'>
                        <HomeIcon className='inline-block mr-2 w-6 h-6 -mt-2' />
                        Home
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-custom-grey py-2'>
                    <a href="" className='px-3'>
                        <ManageAccountsIcon className='inline-block mr-2 w-6 h-6 -mt-2' />
                        Account Settings
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-custom-grey py-2'>
                    <a href="" className='px-3'>
                        <PeopleAltIcon className='inline-block mr-2 w-6 h-6 -mt-2' />
                        Manage Faculty
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-custom-grey py-2'>
                    <a href="" className='px-3'>
                        <AccountCircleIcon className='inline-block mr-2 w-6 h-6 -mt-2' />
                        Manage Users
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-custom-grey py-2'>
                    <a href="" className='px-3'>
                        <ExitToAppIcon className='inline-block mr-2 w-6 h-6 -mt-2' />
                        Sign Out
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidebar;