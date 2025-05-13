import { FaCheckCircle } from "react-icons/fa";

import React from 'react'

const Features = () => {
        console.log('Features Component rendered')

    return (
        <section className='lg:flex grid justify-between w-full items-start lg:px-[80px] md:px-[30px] px-[10px] py-[24px] gap-10 bg-gray-50' id='features'>
            <div>
                <div>
                    <p className='font-extrabold text-4xl leading-tight text-gray-900'>Work with tools you already use</p>
                    <p className='text-xl text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                </div>
                <div className="mt-8 pt-8 flex flex-col gap-5 border-t-1 border-gray-300">
                    <div className="flex flex-col gap-3">
                        <p className='text-gray-900 font-medium text-base flex items-center gap-5'><FaCheckCircle className="text-purple-600 text-xl"/> Continuous integration and deployment</p>
                        <p className='text-gray-900 font-medium text-base flex items-center gap-5'><FaCheckCircle className="text-purple-600 text-xl"/> Development workflow</p>
                        <p className='text-gray-900 font-medium text-base flex items-center gap-5'><FaCheckCircle className="text-purple-600 text-xl"/> Knowledge management</p>
                    </div>
                    <p className='text-xl text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                </div>
            </div>
            <img className="lg:w-6/12 w-full" src="../../public/features1.png" alt="features image one" />
        </section>
    )
}

export default Features