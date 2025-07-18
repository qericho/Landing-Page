import Star from '../../assets/img/star.png'
const TestimonialsCard = ({displayImg,name,position,caption,rating}) => {
  return (
    <div className='px-[30px] py-[40px] w-full xl:w-[370px] md:h-[300px] xl:h-[434px] bg-[#ffffff] shadow
      flex-col md:flex-row xl:flex-col flex gap-6 items-center text-center justify-center font-AguDisplay rounded-2xl'>
        <div className='flex flex-col items-center gap-2 py-2 w-[280px]'>
            <img src={displayImg} alt="dislpay-picture" />
            <h3 className='font-semibold text-[21px]'>{name}</h3>
            <p className='text-[#374151] text-[14px]'>{position}</p>
        </div>
        <div className='w-[300px] space-y-5'>
            <p className='py-2 text-start xl:text-center text-[16px] text-[#2D2D2D]'>{caption}</p>
            <div className='flex items-center md:justify-start xl:justify-center justify-center gap-x-2'>
               {[...Array(rating)].map((_, index) => (
                <span key={index}>
                  <img src={Star} alt="Star-Icon" />
                </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard