import { FaCheckCircle } from "react-icons/fa";
import React from 'react'

const FeaturesTwo = () => {
        console.log('FeaturesTwo Component rendered')

    return (
        <section className='lg:flex grid justify-between w-full items-start lg:px-[80px] md:px-[30px] px-[10px] py-[24px] gap-10 bg-gray-50'>
            <img className="lg:w-6/12 w-full" src="../../public/feature2.png" alt="features image two" />
            <div>
                <div className="grid gap-5">
                    <p className='text-3xl font-extrabold leading-tight'>We invest in the world’s potential</p>
                    <p className='text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                </div>
                
                <div className="mt-5 pt-5 grid gap-3 border-t-1 border-gray-300">
                    <p className="flex items-center gap-5 text-gray-900"><FaCheckCircle className="text-purple-600"/>Dynamic reports and dashboards</p>
                    <p className="flex items-center gap-5 text-gray-900"><FaCheckCircle className="text-purple-600"/>Templates for everyone</p>
                    <p className="flex items-center gap-5 text-gray-900"><FaCheckCircle className="text-purple-600"/>Development workflow</p>
                    <p className="flex items-center gap-5 text-gray-900"><FaCheckCircle className="text-purple-600"/>Limitless business automation</p>
                    <p className="flex items-center gap-5 text-gray-900"><FaCheckCircle className="text-purple-600"/>Knowledge management</p>
                </div>
            </div>
        </section>
    )
}

export default FeaturesTwo