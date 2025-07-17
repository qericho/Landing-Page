import CTA from '../assets/img/cta-img.png'
import ArrowR from '../assets/img/arrow-right-w.png'
import Button from './buttons/Button'
const Cta = () => {
  return (
    <section className='lg:py-10 py-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
            <img className='w-[320px] lg:w-[500px]'
            src={CTA} alt="cta-img" />
            <div className='flex lg:items-start md:text-start text-center items-center flex-col gap-5'>
                <h2 className='text-[28px] xl:text-[50px] font-AguDisplay font-bold'>Get Landing Page UI Kit Today!</h2>
                <p className='font-Mulish text-[21px]'>Break the Figma limits and explore the endless possibilities with Anima.</p>
                <Button title={"Get Started"}  icon={<img src={ArrowR} alt="ArrowR" className="w-4" />}
                className={"border w-[221px] h-[60px] bg-[#009379] text-[#fff] flex flex-row-reverse gap-2 items-center justify-center"}/>
            </div>
        </div>
    </section>
  )
}

export default Cta