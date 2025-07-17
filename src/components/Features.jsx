import FeatureCard from "../components/cards/FeatureCard"
import Wand from '../assets/img/wand.png'
import Responsive from '../assets/img/responsive.png'
import NoCode from '../assets/img/no-code.png'
import Title from "./Title"

const desc1 = "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!";
const desc2 = "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile."
const desc3 = "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.."

const Features = () => {
  return (
    <section className="pt-40">
        <Title title={'Features'}
         desc={"Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages."}/>
        <div className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-10 py-[100px]">
            <FeatureCard title={'Fast building'} desc={desc1} icon={Wand}/>
            <FeatureCard title={'Responsive Design'} desc={desc2} icon={Responsive}/>
            <FeatureCard title={'No Code Needed'} desc={desc3} icon={NoCode}/>
            
        </div>
    </section>
  )
}

export default Features