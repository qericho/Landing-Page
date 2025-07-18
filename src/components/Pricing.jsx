import PricingCard from "./cards/PricingCard"
import Title from "./Title"
import pricingData from "../assets/data/Pricing"
const Pricing = () => {
  return (
    <section className="py-4">
        <Title title={"Pick Your Perfect Plan"} desc={"Find the perfect plan for your business with our flexible pricing options."}/>
        <div className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-5 py-20">
            {pricingData.map((p,i)=>(
                <PricingCard key={i}
                index={i}
                title={p.title}
                price={p.price}
                billing={p.billing}
                desc={p.description}
                feature1={p.feature1}
                feature2={p.feature2}
                feature3={p.feature3}
                isLast={i === pricingData.length - 1}/>
            ))}
        </div>
    </section>
  )
}

export default Pricing