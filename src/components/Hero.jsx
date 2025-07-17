import Button from './Button'
import HeroImg from '../assets/img/hero-img.png'

const Hero = () => {
  return (
    <div className='py-[50px] lg:py-[100px]'>
       <div className="grid grid-cols-1 lg:grid-cols-2 space-y-8 place-items-center ">
         <div className="flex flex-col gap-5 lg:gap-10 items-center lg:items-start lg:text-start text-center">
            <h1 className='font-AguDisplay text-[37px] md:text-[67px] font-bold'>
                Create Engaging Landing Pages
            </h1>
            <p className='font-Mulish text-[16px] md:text-[21px]'>Build beautiful landing pages in record time with <a href="#" className='text-blue-500 hover:text-blue-700'> Anima’s</a> Landing Page UI kit for Figma. No code required!</p>
            <div className='flex items-center gap-x-3 font-Poppins'>
                <Button title={'Get Started'} className={"bg-[#009379] text-[#fff] w-[221px]"}/>
                <Button title={'Hot it works'} className={"border border-1-[#009379] text-[#009379] w-[221px]  lg:flex hidden justify-center"}/>
            </div>
         </div>
         <div className="flex justify-center lg:justify-end w-full">
            <img className='w-[320px] md:w-[350px] lg:w-[450px]' src={HeroImg} alt="hero-img" />
         </div>
       </div>
    </div>
  )
}

export default Hero