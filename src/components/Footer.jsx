import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="flex md:flex-row flex-col gap-5 justify-between
        px-5 md:px-[60px] py-[24px] bg-[#2D2D2D]">
            <p className="font-Mulish text-[14px] text-[#FFFFFF]">© 2023 Anima Landing Page Ui Kit. </p>
            <div className="flex items-center gap-2">
                <span className="flex items-center justify-center 
                w-8 h-8 bg-[#4E4D4D] rounded-full text-[#ffffff]">
                <FaYoutube/></span>
                <span className="flex items-center justify-center 
                w-8 h-8 bg-[#4E4D4D] rounded-full text-[#ffffff]">
                <FaInstagram/></span>
                <span className="flex items-center justify-center 
                w-8 h-8 bg-[#4E4D4D] rounded-full text-[#ffffff]">
                <FaGithub/></span>
                <span className="flex items-center justify-center 
                w-8 h-8 bg-[#4E4D4D] rounded-full text-[#ffffff]">
                <FaLinkedin/></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer