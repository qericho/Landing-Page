import MetrixCard from "./cards/MetrixCard"
import Title from "./Title"

const desc = "Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style."
const Metrix = () => {
  return (
    <section className="py-30">
        <Title title={'Our Metrics Tell the Story'} desc={desc}/>
        <div className="grid grid-cols-2 xl:grid-cols-4 place-items-center gap-5 py-[50px]">
            <MetrixCard title={'10k+'} desc={"Website launched"}/>
            <MetrixCard title={'931k+'} desc={"Projects created with Anima"}/>
            <MetrixCard title={'240k+'} desc={"New users joined Anima"}/>
            <MetrixCard title={'12k+'} desc={"Teams used Anima"}/>
        </div>

    </section>
  )
}

export default Metrix