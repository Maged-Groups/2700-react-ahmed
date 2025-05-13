import google from "../../../assets/imgs/google.png";
import ms from "../../../assets/imgs/Microsoft.png";
import spt from "../../../assets/imgs/Spotify.png";
import mac from "../../../assets/imgs/MailChimp.png";
import abnb from "../../../assets/imgs/Airbnb.png";
import uber from "../../../assets/imgs/Uber.png";

const Brands = () => {
    console.log('Brands Component rendered')

    return (
        <section className='flex flex-wrap md:flex-nowrap justify-between w-full h-40 items-start lg:px-[80px] md:px-[30px] px-[10px] py-[24px] gap-10'>
            <img className='md:w-1/12 w-2/12 h-8' src={google} alt="Google" />
            <img className='md:w-1/12 w-2/12 h-8' src={ms} alt="Microsoft" />
            <img className='md:w-1/12 w-2/12 h-8' src={spt} alt="Spotify" />
            <img className='md:w-1/12 w-2/12 h-8' src={mac} alt="MailChimp" />
            <img className='md:w-1/12 w-2/12 h-8' src={abnb} alt="Airbnb" />
            <img className='md:w-1/12 w-2/12 h-8' src={uber} alt="Uber" />
        </section>
    )
}

export default Brands