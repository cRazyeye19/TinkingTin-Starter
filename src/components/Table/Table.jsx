import React, { useState } from 'react'
import './table.css'
import data from '../../data/table.json'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
export const Table = () => {

    //Pagination logic
    const [currPage, setCurrPage] = useState(1)
    const recordsperpage = 5;
    const lastIndex = currPage * recordsperpage;
    const firstIndex = lastIndex - recordsperpage;
    const records = data.slice(firstIndex, lastIndex);
    const nthpage = Math.ceil(data.length / recordsperpage)
    const numbers = [...Array(nthpage + 1).keys()].slice(1)

    //Search logic
    const [search, setSearch] = useState('')
    console.log(search)

    return (
        <div className='container mx-auto p-3'>
            <div className='drop-shadow-lg bg-gray-100 p-10'>
                <>
                    <div className="container mx-auto my-auto py4 px-2.5">
                        <div className="flex flex-row space-x-4 mb-7">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Tickets...." className="p-2 block w-full bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                            <button className="bg-custom-green hover:bg-slate-700 basis-1/3 text-white flex items-center justify-center space-x-2 transition-all"><ConfirmationNumberIcon style={{ marginRight: '8px' }} />Create Ticket</button>
                        </div>
                        <div className="overflow-x-auto">
                            {/* Table */}
                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                {/* Table Heading */}
                                <thead className='bg-cdf0ea'>
                                    <tr>
                                        <th className="text-center p-4">Ticket #</th>
                                        <th className="text-left p-4">Issue</th>
                                        <th className="text-center p-4">Description</th>
                                        <th className="text-center p-4">Assignee</th>
                                        <th className="text-center p-4">Priority</th>
                                        <th className="text-center p-4">Status</th>
                                        <th className="text-center p-4">Actions</th>
                                    </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                    {records.filter((tickets) => {
                                        const priorityMatch = tickets.priority.toLowerCase().includes(search);
                                        const statusMatch = tickets.status.toLowerCase().includes(search);
                                        return search.trim() === '' || priorityMatch || statusMatch;
                                    }).map((tickets, key) => (
                                        // Table row
                                        <tr className='hover:bg-slate-100' key={key}>
                                            {/* Table Data */}
                                            <td className='text-center align-top py-7 border-b-2 border-gray-200'>{tickets.id}</td>
                                            <td className='pl-4 align-top py-7 border-b-2 border-gray-200'>{tickets.issue}</td>
                                            <td className='text-left align-top py-7 border-b-2 border-gray-200'>{tickets.description}</td>
                                            <td className='text-center align-top py-7 border-b-2 border-gray-200'>
                                                <span>{tickets.assignee}</span>
                                            </td>
                                            <td className='text-center align-middle border-b-2 border-gray-200'>
                                                <span className='m-2 py-1 rounded-md' id="priority">{tickets.priority}</span>
                                            </td>
                                            <td className='text-center align-top py-7 border-b-2 border-gray-200'>
                                                <span>{tickets.status}</span>
                                            </td>
                                            <td className='text-center align-top py-7 border-b-2 border-gray-200'>
                                                <div className='flex justify-center items-center space-x-4'>
                                                    <span className='cursor-pointer'>
                                                        <EditIcon />
                                                    </span>
                                                    <span className='cursor-pointer'>
                                                        <DeleteIcon />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='flex justify-center mt-5'>
                                <nav>
                                    <ul className="list-style-none flex">
                                        <li>
                                            <a href="#!" className="relative block rounded bg-transparent px-3 py-1.5 text-base transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-slate-700 dark:hover:text-white" onClick={prevPage}>
                                                Previous
                                            </a>
                                        </li>
                                        {
                                            numbers.map((num, key) => (
                                                <li key={key} className={`${currPage === num ? 'active' : ''}`}>
                                                    <a href="#!" className="relative block rounded bg-transparent px-3 py-1.5 text-base  transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-slate-700 dark:hover:text-white" onClick={() => changePage(num)}>{num}</a>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <a href="#!" className="relative block rounded bg-transparent px-3 py-1.5 text-base transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-slate-700 dark:hover:text-white" onClick={nextPage}>
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )

    function prevPage() {
        if (currPage !== 1) {
            setCurrPage(currPage - 1)
        }
    }

    function changePage(id) {
        setCurrPage(id)
    }

    function nextPage() {
        if (currPage !== nthpage) {
            setCurrPage(currPage + 1)
        }
    }
}

export default Table;