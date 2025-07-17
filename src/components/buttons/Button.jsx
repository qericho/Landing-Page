const Button = ({className,title,icon}) => {
  return (
    <button 
      className={`hover:scale-98 cursor-pointer duration-100 ${className} text-[16px]
      font-semibold rounded-[20px] leading-14 `}>
      {icon}
      {title}
    </button>
  )
}

export default Button;
