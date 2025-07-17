import Logo from '../assets/img/logo.png'
import RocketLuch from '../assets/img/rocket-lunch.png'
import Button from '../components/buttons/Button'
const Navbar = () => {
  return (
    <nav className="w-full h-[100px] flex items-center justify-center md:justify-between font-Poppins">
        {/* Logo */}
        <div className='flex items-center'>
            <img className='cursor-pointer' src={Logo} alt="logo" />
            <h1 className='text-2xl font-bold md:hidden lg:flex flex'>Landing<span className='font-normal'>Page</span></h1>
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-2.5 md:flex hidden'>
            <Button className={'xl:flex hidden justify-center w-[200px] '} title={"Contact"}/>
            <Button className={'bg-[#E5F4F2] text-[#009379] w-[200px] '}
            title={"How it works"}/>
            <Button className={"flex w-[200px]  items-center justify-center gap-2 bg-[#009379] text-[#fff] md:flex hidden"}
            icon={<img src={RocketLuch} alt="rocket" className="w-5" />}
            title={"Get Started"}/>
        </div>
    </nav>
  )
}

export default Navbar