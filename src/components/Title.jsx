const Title = ({ title, desc, isStart }) => {
  return (
    <div
      className={`flex flex-col gap-y-[20px] 
      ${isStart ? "items-start justify-start text-start px-5 md:px-20" : "items-center justify-center text-center"}`}
    >
      <h1 className="font-AguDisplay text-[38px] font-bold">{title}</h1>
      <p className={`font-Mulish text-[16px] ${isStart ? "text-start" : "text-center"}`}>
        {desc}
      </p>
    </div>
  );
};

export default Title;
