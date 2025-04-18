import React from 'react'
import phonepic from '../../../assets/images/pics/apna-app.png'
import { FaStar } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

const Download = () => {
  return (
    <div className='flex items-center justify-center h-[80vh] w-screen'>
        <div className='flex flex-col sm:flex-row justify-between gap-3 pt-16 px-4 pb-0 rounded-2xl items-start bg-[#F9F4FF] border-gray-200 border-1 shadow-sm'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-semibold text-[#512193]'>Download Apna app!</h1>
            <ul className='block sm:hidden'>
                <li>Unlimited job applications</li>
                <li>HRs contact you directly</li>
                <li>Track your Applications</li>
            </ul>
            <p className='hidden sm:block'>Unlimited job applications | HRs contact you directly | Track your Applications</p>
        </div>
        <div className='flex flex-row-reverse sm:flex-row gap-7 items-center'>
            <img src={phonepic}  alt="" />
            <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-col gap-1.5 bg-gradient-to-r to-purple-100 from-purple-50 p-5'>
                <span className='flex items-center gap-3'><FaStar className='text-yellow-400 text-4xl' /> <h1 className='font-bold text-[#512193] text-4xl'>4.4</h1></span>
                <p className='text-[#512193] font-semibold'>5L reviews</p>
            </div>
            <div className='flex flex-col gap-1.5 bg-gradient-to-r to-purple-100 from-purple-50 p-5'>
                <span className='flex items-center gap-3'><MdFileDownload className='text-[#512193] rounded-full text-4xl p-1 bg-purple-200/50' /> <h1 className='font-bold text-[#512193] text-4xl'>1 cr+</h1></span>
                <p className='text-[#512193] font-semibold'>App downloads</p>
            </div></div>
        </div>
        </div>
    </div>
  )
}

export default Download