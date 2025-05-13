import { FaQuoteLeft } from "react-icons/fa";

import React from 'react'

const Team = () => {
        console.log('Team Component rendered')

    return (
        <section id='team'>
            <div className="flex flex-col justify-center items-center p-5 lg:p-[96px] gap-5 bg-gray-50">
                <FaQuoteLeft className="text-4xl text-gray-400"/>
                <p className="leading-relaxed text-gray-900 font-semibold md:text-2xl md:w-7/12">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                <div className="flex gap-2">
                    <img className="rounded-full" src="../../public/Avatar.png" alt="avatar" />
                    <p className="text-gray-900">Micheal Gough /</p>
                    <p className="text-gray-500">CEO at Google</p>
                </div>
            </div>
        </section>
    )
}

export default Team