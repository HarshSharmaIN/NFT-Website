import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Spotlight } from "./components/ui/Spotlight";

function App() {
  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight
          className="-top-40 left-0 md:-left-15 md:-top-40"
          fill="white"
        />
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default App;
