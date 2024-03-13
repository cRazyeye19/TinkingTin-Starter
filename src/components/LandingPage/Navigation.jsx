import React from 'react'

export const Navigation = (props) => {
    return (
        <nav id="menu" className="bg-white shadow-lg px-10 py-0 sticky top-0 z-50"> {/* Add padding to increase width */}
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <div className="navbar-header flex items-center justify-between w-full">
                        <a className="navbar-brand text-xl font-bold" href="#page-top">TinkingTin</a>{" "}
                        <button type="button" className="block md:hidden text-gray-800 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1 3.5C1 3.22386 1.22386 3 1.5 3H22.5C22.7761 3 23 3.22386 23 3.5C23 3.77614 22.7761 4 22.5 4H1.5C1.22386 4 1 3.77614 1 3.5ZM1.5 11C1.22386 11 1 11.2239 1 11.5C1 11.7761 1.22386 12 1.5 12H22.5C22.7761 12 23 11.7761 23 11.5C23 11.2239 22.7761 11 22.5 11H1.5ZM1 18.5C1 18.2239 1.22386 18 1.5 18H22.5C22.7761 18 23 18.2239 23 18.5C23 18.7761 22.7761 19 22.5 19H1.5C1.22386 19 1 18.7761 1 18.5Z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex flex-row space-x-8">
                            <li>
                                <a href="#features" className="page-scroll transition-all text-gray-800 uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="page-scroll transition-all text-gray-800 uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="page-scroll transition-all uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#footer" className="page-scroll transition-all uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#login" className="page-scroll transition-all  uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#signup" className="page-scroll transition-all uppercase font-bold text-sm hover:border-b-2 border-green-500 hover:pb-1"> {/* Increase font size and make text uppercase */}
                                    Signup
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
