
const Title = ({title, desc}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[20px] text-center">
        <h1 className="font-AguDisplay text-[38px] font-bold">{title}</h1>
        <p className="font-Mulish text-[16px] text-center">{desc}</p>
    </div>
  )
}

export default Title