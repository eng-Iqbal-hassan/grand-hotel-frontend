import { useEffect, useState } from "react"
import Logo from "../assets/svgs/Logo";
import splash1 from "../assets/images/spalsh-1.jpg";
import splash2 from "../assets/images/splash-2.jpg"
import splash3 from "../assets/images/splash-3.jpg"

export default function Splash() {
  const [step, setStep] = useState<number>(0);
  const handleClick = () =>setStep(prev => prev + 1);

  useEffect(()=>{
    if(step === 0) {
      const timer = setTimeout(()=>{
        setStep(1)
      }, 3000)
      return () => clearTimeout(timer)
    }
  },[step]);


  return (
    <div>
      {step === 0
        &&
        <div className="bg-primary w-full min-h-screen flex flex-col items-center justify-center px-6">
          <Logo />
          <div>
            <h2 className="text-3xl font-bold font-inter tracking-tight text-white text-center mt-2.5">Grand Hotel</h2>
            <p className="text-sm font-regular tracking-tight text-white text-center">Find Your Perfect Stay, Anytime, Anywhere</p>
          </div>
        </div>
      }

      {
        step === 1
        && 
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-14 flex flex-col items-center justify-end" style={{backgroundImage:`url(${splash1})`}}>
          <h4 className="text-2xl font-bold tracking-tight text-white text-center max-w-[254px]">Luxury and Comfort, Just a Tap Away</h4>
          <p className="text-sm font-regular tracking-tight pt-2 pb-8 text-white text-center max-w-[254px]">Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem . </p>
          <button 
            className="h-14 w-full text-lg font-semibold tracking-tight text-white bg-primary rounded-xl"
            onClick={handleClick}
            >
              Continue
          </button>
        </div>
      }

      {
        step === 2
        && 
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-14 flex flex-col items-center justify-end" style={{backgroundImage:`url(${splash2})`}}>
          <h4 className="text-2xl font-bold tracking-tight text-white text-center max-w-[254px]">Book with Ease, Stay with Style</h4>
          <p className="text-sm font-regular tracking-tight pt-2 pb-8 text-white text-center max-w-[254px]">Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem . </p>
          <button 
            className="h-14 w-full text-lg font-semibold tracking-tight text-white bg-primary rounded-xl"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      }

      {
        step === 3
        && 
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-14 flex flex-col items-center justify-end" style={{backgroundImage:`url(${splash3})`}}>
          <h4 className="text-2xl font-bold tracking-tight text-white text-center max-w-[254px]">Discover Your Dream Hotel, Effortlessly</h4>
          <p className="text-sm font-regular tracking-tight pt-2 pb-8 text-white text-center max-w-[254px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="h-14 w-full text-lg font-semibold tracking-tight text-white bg-primary rounded-xl">Get Started</button>
        </div>
      }
    </div>
  )
}
