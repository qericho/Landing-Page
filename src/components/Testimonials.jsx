import TestimonialsCard from "./cards/TestimonialsCard"
import Title from "./Title"
import { testimonials } from "../assets/data/Testimonials"
const Testimonials = () => {
  return (
    <section className="py-0 md:py-40">
        <Title title={'Real Stories from Satisfied Customers '} 
        desc="See how our landing page ui kit is making an impact."/>
        <div className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-4 py-20">
          {testimonials.map((t, i) => (
            <TestimonialsCard key={i}
              displayImg={t.displayImg}
              name={t.name}
              position={t.position}
              caption={t.caption}
              rating={t.rating}
            />
          ))}
        </div>
    </section>
  )
}

export default Testimonials