import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
    return (
        <div className="bg-black text-2xl text-white flex justify-center">

            <div className='px-4 py-4 cursor-pointer justify-self-end' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>

            <div className="hidden md:flex">
                <Link to='/' className="py-2 px-4 hover:bg-blue-700 rounded-xl">Home</Link>
                <Link to="/tool" className="py-2 px-4 hover:bg-blue-700 rounded-xl">Tool</Link>
                <Link to='/data' className="py-2 px-4 hover:bg-blue-700 rounded-xl">Data</Link>
            </div>
        </div>

    )
};
