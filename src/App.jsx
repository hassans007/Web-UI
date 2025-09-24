import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"
import ScrollToTop from "./components/ScrollToTop";
// import { Analytics } from "@vercel/analytics/next"
import SplashCursor from './components/ui/SplashCursor'

function App() {

  return (
    <>
      {/* <SplashCursor /> */}
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/additional-info" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
