import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Splash = lazy(()=>import("./pages/splash/Splash.tsx"));
const SignIn = lazy(()=>import("./pages/signin/SignIn.tsx"));
const SignUp = lazy(()=>import("./pages/signup/SignUp.tsx"));
const OTP = lazy(()=>import("./pages/signup/OTP.tsx"));


export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
