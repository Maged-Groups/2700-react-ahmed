 
const Company = () => {
    console.log('Company Component rendered')
    return (
        <section className='md:flex grid justify-between lg:px-[80px] md:px-[30px] px-[10px]' id='company'>
            <div className='lg:w-6/12 grid pt-10 gap-2'>
                <div className='grid gap-5'>
                    <p className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-black'>Building digital products & brands.</p>
                    <p className='text-gray-500'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className='md:flex gap-5 h-12'>
                    <button className='bg-purple-600 md:mr-0 mr-3  text-white p-2 rounded-xl'>Start 30 Day Free Trial</button>
                    <button className='bg-gray-50 text-gray-800 border-1 border-gray-200 p-2 rounded-xl'>Pricing & FAQ</button>
                </div>
            </div>
            <img className='lg:w-4/12 md:w-6/12' src="../../public/marketing-strategy 1.png" alt="marketing strategy image" />
        </section>
    )
}

export default  Company