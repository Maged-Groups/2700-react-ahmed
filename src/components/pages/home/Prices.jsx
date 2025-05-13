import { FaCheck } from "react-icons/fa";

import pricesData from "../../../lib/prices";
import { Link } from "react-router";


export default function Prices() {
        console.log('Prices Component rendered')

    return (
        <div className="xl:px-[80px] md:px-[30px] px-[10px] py-[24px]">
            <div className="flex  flex-col justify-center items-center">
                <p className="text-gray-900 text-4xl font-extrabold leading-tight">Pay as you grow</p>
                <p className="text-gray-500 text-xl text-center w-9/12">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div className="lg:flex grid mt-10 gap-5">
                {
                    pricesData.map(({ name, info, price, term, includes, href }) => (
                        <div key={name} className="flex lg:w-4/12 xl:p-10 lg:p-0 py-10 lg:py-10 flex-col gap-5 justify-center items-center border-1 border-gray-200 rounded-xl">
                            <p className="text-gray-900 font-semibold text-2xl">{name}</p>
                            <p className="text-gray-500 w-8/12 text-center">{info}</p>
                            <div className="flex items-center gap-2 my-5">
                                <p className="font-extrabold text-4xl text-gray-900">${price}</p>
                                <p className="text-gray-500">/{term}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {
                                    includes.map(({ label, data }, i) =>
                                        <div key={i} className="flex items-center gap-2">
                                            <FaCheck className="text-teal-500" />
                                            {label}
                                            {
                                                data && <p className="font-medium">:{data}</p>
                                            }

                                        </div>
                                    )
                                }
                            </div>
                            <Link to={href} className="bg-purple-600 flex items-center justify-center w-9/12 h-14 rounded-2xl text-white mt-5">Get Started</Link>
                        </div>
                    ))
                }




            </div>
        </div>
    )
}