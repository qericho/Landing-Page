import { FaCheck } from "react-icons/fa6";
import Button from "../buttons/Button";

const PricingCard = ({isLast,index,title,price,billing,desc,feature1,feature2,feature3}) => {
  return (
    <div key={index}
    className={`w-full xl:w-[370px] lg:h-[400px] space-y-5 ${isLast ? "bg-[#009379] text-[#fff]":"bg-[#fff]"} shadow-2xl
     flex flex-col justify-center items-center py-[40px] px-[30px] rounded-2xl`}>
        <div className="flex flex-col w-full">
            <h4 className="text-[21px] font-AguDisplay">{title}</h4>
            <div className="flex items-center">
                <p className="text-[50px] font-AguDisplay">{price}</p> <span className="text-[16px] font-bold pt-6 font-Mulish">/ {billing}</span>
            </div>
            <p className="font-Mulish text-[16px]">{desc}</p>
        </div>
        <div className="space-y-3 w-full">
            <p className="flex items-center font-AguDisplay text-[16px] gap-x-2">
                 <FaCheck className="text-green-500"/>{feature1}</p>
            <p className="flex items-center font-AguDisplay text-[16px] gap-x-2">
                 <FaCheck className="text-green-500"/>{feature2}</p>
            <p className="flex items-center font-AguDisplay text-[16px] gap-x-2">
                 <FaCheck className="text-green-500"/>{feature3}</p>
        </div>
        <Button title={"Get Started"} className={"w-full xl:w-[300px] h-[60px] bg-[#E5F4F2] text-[#009379]"}/>
    </div>
  )
}

export default PricingCard