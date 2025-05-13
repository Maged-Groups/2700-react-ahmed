import { HiServer , HiUsers , HiShoppingCart , HiGlobe} from "react-icons/hi";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import React from 'react'

const MarketPlace = () => {
        console.log('MarketPlace Component rendered')

    return (
        <section id='marketplace' className='lg:px-[80px] md:px-[30px] px-[10px] py-20'>
            <div className="md:flex grid justify-between gap-10">
                <div className="flex flex-col gap-1">
                    <p className="text-purple-600">Trusted Worldwide</p>
                    <p className="leading-tight text-gray-900 text-4xl font-extrabold">Trusted by over 600 million users and 10,000 teams</p>
                    <p className="text-gray-500 mb-2">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                    <div className="border-t-1 border-gray-300">
                        <p className="text-purple-600 flex items-center gap-3 mt-5">Explore Legality Guide <MdOutlineArrowRightAlt/></p>
                        <p className="text-purple-600 flex items-center gap-3">Visit the Trust Center <MdOutlineArrowRightAlt/></p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-6/12'>
                        <HiServer className="text-purple-600 text-2xl"/>
                        <p className="font-bold text-gray-900">99.99% uptime</p>
                        <p className="text-gray-500">for Flowbite, with zero maintenance downtime</p>
                    </div>
                    <div className='w-6/12'>
                        <HiUsers className="text-purple-600 text-2xl"/>
                        <p className="font-bold text-gray-900">600M+ Users</p>
                        <p className="text-gray-500">trusted by over 600 milion users around the world</p>
                    </div>
                    <div className='w-6/12'>
                        <HiShoppingCart className="text-purple-600 text-2xl"/>
                        <p className="font-bold text-gray-900">Millions</p>
                        <p className="text-gray-500">of transactions per day</p>
                    </div>
                    <div className='w-6/12'>
                        <HiGlobe className="text-purple-600 text-2xl"/>
                        <p className="font-bold text-gray-900">100+ countries</p>
                        <p className="text-gray-500">have used Flowbite to create functional websites</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketPlace