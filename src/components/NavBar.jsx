import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import { navbar } from "../dateAndImportImg/data";
const NavBar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <Link to="home" 
                      smooth
                      duration={500}>
                    <h1 className="text-3xl cursor-pointer font-signature ml-2">Terno</h1>
                </Link>

            </div>
            <ul className="hidden md:flex">
                {navbar.map((name) => (
                    <li key={name.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                        <Link to={name.link} smooth duration={500}>{name.link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav &&
                <ul className="flex flex-col justify-center items-center absolute z-10 top-0 left-0 w-full h-screen bg-gradient-to-b from-black bg-black">
                    {navbar.map((name) => (
                        <li key={name.id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
                            <Link
                                onClick={() => setNav(!nav)}
                                to={name.link}
                                smooth
                                duration={500}
                            >{name.link}</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default NavBar;