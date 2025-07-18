import Button from "./buttons/Button";
import Title from "./Title";

const desc1 = "Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.";
const Contact = () => {
  return (
    <section>
        <Title  title={"Let’s get in touch!"} desc={desc1} className={""}/>
        <div className="grid grid-cols-2 place-items-center">
            <div>
                {/* contacts- */}
                <div>
                    <p>+012 345 6789</p>
                    <p>Hello@animaapp.com</p>
                </div>
                <div>
                    <p>Connect with us</p>
                    {/* socials */}
                    <div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col border">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <Button title={"Submit"} className={"bg-[#009379] text-[#fff] w-[160px] h-[60px]"}/>
            </div>
        </div>
    </section>
  )
}

export default Contact