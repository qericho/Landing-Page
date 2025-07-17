
const MetrixCard = ({title,desc}) => {
  return (
    <div className="bg-[#fff] w-[160px] md:w-[270px] h-[143px] md:h-[171px] border-b-[#F2BFAF] border-b-4 flex flex-col
          justify-center items-center gap-y-5 text-center p-2 rounded-t">
        <h3 className="font-AguDisplay font-bold text-[28px] md:text-[38px]">{title}</h3>
        <p className="font-Mulish text-[16px]">{desc}</p>
    </div>
  )
}

export default MetrixCard