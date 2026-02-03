import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Splash = lazy(()=>import("./pages/Splash.tsx"))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
