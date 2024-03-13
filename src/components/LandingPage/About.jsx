import React from 'react'

export const About = (props) => {
    return (
        <div id="about" className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full md:w-1/2">
                        <img src="img/about.jpg" className="w-full" alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="about-text">
                            <h2 className="text-3xl font-bold mb-4">About Us</h2>
                            <p className="mb-4 text-justify">{props.data ? props.data.paragraph : "loading..."}</p>
                            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 mb-4">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2 mb-4">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                <li key={`${d}-${i}`}> {d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;