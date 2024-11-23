import React from 'react';
import logo from "../../images/logo.png";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className='bg-[#f0f0ea] h-[120px] w-full'>
            <div id = "mainNavDiv" className='flex items-center justify-around h-full'>
                <div id = "menuDiv" className='hidden'>
                    <IoMdMenu className='text-3xl text-[#184b81]'/>
                </div>
                <div className='cursor-pointer'>
                    <img src={logo} alt="" className='w-[220px]' />
                </div>
                <div id = "optionsDiv" className='flex w-[20%] justify-around'>
                    <button className='text-[#184b81] font-semibold hover:text-[#279dd7] transition-all duration-300'>Home</button>
                    <button className='text-[#184b81] font-semibold hover:text-[#279dd7] transition-all duration-300'>Scan Virus</button>
                    <button className='text-[#184b81] font-semibold border-[#184b81] border-2 py-3 px-8 rounded-xl flex gap-2 items-center justify-center hover:bg-[#184b81] hover:text-white transition-all duration-200"'><div><FaUser className='text-[#279dd7]'/>
                    </div>Log In</button>
                </div>
            </div>
        </div>
    )
}
