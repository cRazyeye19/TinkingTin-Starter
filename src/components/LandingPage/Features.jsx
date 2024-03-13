import React from 'react'

export const Features = (props) => {
    return (
        <div id="features" className="text-center py-10 bg-cdf0ea">
            <div className="container mx-auto">
                <div className="mx-auto mb-8">
                    <h2 className="text-3xl font-bold">Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className="flex flex-col flex-wrap items-center">
                                <i className={`${d.icon} text-3xl bg-custom-green p-4 rounded-full`}></i>
                                <h3 className="text-lg font-bold mt-4">{d.title}</h3>
                                <p className="mt-2">{d.text}</p>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    )
}

export default Features;
