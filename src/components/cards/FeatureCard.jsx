import ArrowR from '../../assets/img/arrow-right.png'
const FeatureCard = ({title,desc,icon}) => {
  return (
    <div className='max-w-full lg:min-w-[370px] h-[380px] bg-[#FFFFFF] py-[30px] gap-y-10 px-[40px] flex justify-center items-center flex-col text-center shadow rounded-2xl'>
        <img className='w-[60px]'
        src={icon} alt="icon" />
        <h3 className='font-AguDisplay text-[28px] font-bold'>{title}</h3>
        <p className='font-AguDisplay text-[16px]'>{desc}</p>
        <button className='flex items-center gap-x-3 font-semibold text-[#009379]'>
            <p className=''>Learn More</p>
            <img src={ArrowR} alt="arrow-rigth" />
        </button>
    </div>
  )
}

export default FeatureCard