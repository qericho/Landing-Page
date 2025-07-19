import Button from "./buttons/Button";
import Title from "./Title";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";



const isStart = true;


const desc1 = "Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.";
const Contact = () => {
  return (
    <section className="py-0 md:py-35">
        <Title title={"Let’s get in touch!"} desc={desc1} isStart={isStart}/>
        <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center py-[40px]">
            <div className="w-full lg:w-[500px] h-[230px]  flex flex-col gap-5 justify-center px-5 lg:px-10 py-0 lg:py-5">
                {/* contacts- */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                     <span className="text-[#009379]"><FaPhoneAlt/></span>
                     <p className="font-AguDisplay text-[16px]">+0L12 345 6789</p>
                    </div>
                    <div className="flex items-center gap-2">
                    <span className="text-[#009379]"><IoMail/></span>
                    <p className="font-AguDisplay text-[16px]">Hello@animaapp.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-AguDisplay text-[21px] font-semibold">Connect with us</p>
                    {/* socials */}
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center text-xl rounded-full bg-[#E5F4F2]">
                        <FaInstagram/></span>
                        <span className="w-10 h-10 flex items-center justify-center text-xl rounded-full bg-[#E5F4F2]">
                        <CiBasketball/></span>
                        <span className="w-10 h-10 flex items-center justify-center text-xl rounded-full bg-[#E5F4F2]">
                        <FaBehance/></span>
                        <span className="w-10 h-10 flex items-center justify-center text-xl rounded-full bg-[#E5F4F2]">
                        <CiTwitter/></span>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[500px] h-[230px] flex flex-col justify-center  gap-4 px-5 lg:px-10 py-0 lg:py-5">
                <div className="relative">
                    <div className="absolute top-5 left-11 h-[20px] w-[1px] bg-[#DBE3FF]"></div>
                    <span className="absolute top-5.5 left-4 text-[#009379]"><IoMdPerson/></span>
                     <input className="w-full h-[60px] border outline-none border-[#d8d8d8] rounded-2xl pl-15 py-2" 
                     type="text" placeholder="Full Name" />
                </div>
                <div className="relative">
                    <div className="absolute top-5 left-11 h-[20px] w-[1px] bg-[#DBE3FF]"></div>
                    <span className="absolute top-5.5 left-4 text-[#009379]"><IoMail/></span>
                    <input className="w-full h-[60px] border outline-none border-[#d8d8d8] rounded-2xl pl-15 py-2"
                     type="text" placeholder="Email" />
                </div>
                <Button title={"Submit"} className={"bg-[#009379] text-[#fff] w-[160px] h-[60px]"}/>
            </div>
        </div>
    </section>
  )
}

export default Contact