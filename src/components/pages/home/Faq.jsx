import { FaChevronUp } from "react-icons/fa";
 

const Faq = () => {
        console.log('Faq Component rendered')

    const openAccordion1 = () => {
        document.querySelector('#opening1').classList.toggle('hidden');
        document.querySelector('#icon1').classList.toggle('rotate-180')
    }
    const openAccordion2 = () => {
        document.querySelector('#opening2').classList.toggle('hidden');
        document.querySelector('#icon2').classList.toggle('rotate-180')
    }
    const openAccordion3 = () => {
        document.querySelector('#opening3').classList.toggle('hidden');
        document.querySelector('#icon3').classList.toggle('rotate-180')
    }
    const openAccordion4 = () => {
        document.querySelector('#opening4').classList.toggle('hidden');
        document.querySelector('#icon4').classList.toggle('rotate-180')
    }
    return (
        <section id='contact'>
            <div className='flex flex-col items-center lg:px-[80px] md:px-[30px] px-[10px] py-10'>
                <p className='text-gray-900 leading-tight md:text-4xl text-xl font-extrabold'>Frequently asked questions</p>
                <div className='flex flex-col gap-5 items-center lg:w-6/12 md:w-9/12 w-full mt-10 px-5'>
                    <div className="flex flex-col items-center w-full">
                        <button className='text-gray-900 w-full font-medium items-center md:text-base text-xs flex justify-between border-b-1 pb-5 border-gray-200' onClick={openAccordion1}>Can I use FlowBite in open-source projects?<FaChevronUp className="text-gray-900" id="icon1" /></button>
                        <div id="opening1" className='text-gray-500 mt-5'>
                            <p className="md:text-base text-sm">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                            <p className="md:text-base text-sm">With that being said, feel free to use this design kit for your open-source projects.</p>
                            <p className="md:text-base text-sm">Find out more information by reading the license.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <button className='text-gray-900 w-full font-medium items-center md:text-base text-xs flex justify-between border-b-1 pb-5 border-gray-200' onClick={openAccordion2}>Where can I access my download files?<FaChevronUp className="rotate-180 text-gray-900" id="icon2" /></button>
                        <div id="opening2" className='text-gray-500 mt-5 hidden'>
                            <p className="md:text-base text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium minus laudantium velit, sint eveniet fuga repellendus veniam doloremque atque est? Quasi unde fuga recusandae alias id voluptate facere a!</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <button className='text-gray-900 w-full font-medium items-center md:text-base text-xs flex justify-between border-b-1 pb-5 border-gray-200' onClick={openAccordion3}>Can I use FlowBite for commercial purposes?<FaChevronUp className="rotate-180 text-gray-900" id="icon3" /></button>
                        <div id="opening3" className='text-gray-500 mt-5 hidden'>
                            <p className="md:text-base text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate voluptatibus molestias nisi quibusdam, cumque odit iure suscipit sit unde laborum aliquam dolore adipisci nihil totam ex quos vitae. Quia!</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <button className='text-gray-900 w-full font-medium items-center md:text-base text-xs flex justify-between border-b-1 pb-5 border-gray-200' onClick={openAccordion4}>What about browser support?<FaChevronUp className="rotate-180 text-gray-900" id="icon4" /></button>
                        <div id="opening4" className='text-gray-500 mt-5 hidden'>
                            <p className="md:text-base text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium, nostrum ut esse laboriosam recusandae assumenda, ad at sed nobis repellat sapiente quam ullam amet iste distinctio dolorum est eius?</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Faq