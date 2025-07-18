import Logo_1 from '../assets/img/air-bnb-logo.png'
import Logo_2 from '../assets/img/google-logo.png'
import Logo_3 from '../assets/img/amazon-logo.png'
import Logo_4 from '../assets/img/microsoft-logo.png'
import Logo_5 from '../assets/img/fedex-logo.png'
import Logo_6 from '../assets/img/hubspot-logo.png'

const LogoBar = () => {
  return (
    <div className='w-fullborder border border-y-[#D8D8D8] border-x-0  py-[60px]'>
        <div className='md:gap-y-0 gap-y-10 grid grid-cols-3 md:grid-cols-6 place-items-center'>
             <img className='w-[80px]' src={Logo_1} alt="Logo-Bar-1"/>
             <img className='w-[80px]' src={Logo_2} alt="Logo-Bar-1"/>
             <img className='w-[80px]' src={Logo_3} alt="Logo-Bar-1"/>
             <img className='w-[80px]' src={Logo_4} alt="Logo-Bar-1"/>
             <img className='w-[80px]' src={Logo_5} alt="Logo-Bar-1"/>
             <img className='w-[80px]' src={Logo_6} alt="Logo-Bar-1"/>
        </div>
       
    </div>
  )
}

export default LogoBar