import React from "react";
import { portfolio } from "../dateAndImportImg/data";

const Portfolio = () => {
    return (
        <div name='portfolio'
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen xs:h-auto xs:py-8"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work rigth here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 ">
                    {portfolio.map(({ id, src, demoLink, codeLink}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg' >
                            <img src={src} alt="" className="rounded-md duration-200  h-[150px] w-full hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <a href={demoLink} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                                <a href={codeLink} target='_blank' rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 xs:grid xs:justify-center'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Portfolio;