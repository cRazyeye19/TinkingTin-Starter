import React from 'react'
import Background from '../../images/header/pexels-pixabay-416405.jpg'

export const Header = (props) => {
    return (
        <header id="header" className='bg-center sm:bg-top md:bg-center lg:bg-top' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Background})`}}>
            <div className="intro">
                <div className="overlay">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="intro-text text-center text-white">
                                <h1 className="text-4xl md:text-6xl">
                                    {props.data ? props.data.title : "Loading"}
                                    <br /><span>with TinkingTin</span>
                                </h1>
                                <p className="text-base py-4 m-10">
                                    {props.data ? props.data.paragraph : "Loading"}
                                </p>
                                <a
                                    href="#features"
                                    className="btn-custom btn-lg mt-4 inline-block bg-custom-green hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Learn More
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
