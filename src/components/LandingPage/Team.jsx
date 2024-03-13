import React from 'react'

export const Team = (props) => {
    return (
        <div id="team" className="text-center py-16">
            <div className="container mx-auto">
                <div className="mx-auto mb-8">
                    <h2 className="text-3xl font-bold">Meet the Team</h2>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="w-full md:w-1/4 mb-8">
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    {" "}
                                    <img src={d.img} alt="..." className="w-full" />
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold">{d.name}</h4>
                                        <p className="text-sm text-gray-700">{d.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    )
}

export default Team;
