import { useState } from "react"
import Logo from "../assets/svgs/Logo";
import splash1 from "../assets/images/spalsh-1.jpg"
import splash2 from "../assets/images/splash-2.jpg"
import splash3 from "../assets/images/splash-3.jpg"

export default function Splash() {
  const [step, setStep] = useState<number>(3);
  // const handleClick = () =>setStep(prev => prev + 1);
  // const prevState = () => setStep(prev => prev + 1);
  return (
    <div>
      {step === 0
        &&
        <div className="bg-primary w-full min-h-screen">
          <Logo />
          <div>
            <h2 className="text-3xl font-bold">Grand Hotel</h2>
            <p className="">Find Your Perfect Stay, Anytime, Anywhere</p>
          </div>
        </div>
      }
      {
        step === 1 
        &&
        <div>
          <img src={splash1} alt="splash-1" />
        </div>
      }
      {
        step === 2
        &&
        <div>
          <img src={splash2} alt="splash-2" />
        </div>
      }
      {
        step === 3 
        &&
        <div>
          <img src={splash3} alt="splash-3" />
        </div>
      }
    </div>
  )
}
