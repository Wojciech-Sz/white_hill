import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Office from "@/components/sections/Office";
import Projects from "@/components/sections/Projects";
import { heroImages } from "@/constans";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://white-hill-two.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        heroImages={heroImages}
        className="hero h-[83vh]"
      >
        <div className="hero-text">
          <h2>Architektura / Wnętrza</h2>
          <p className="ml-[-4.4px] max-w-[30ch] text-balance">
            Pomożemy Wam stworzyć Waszą niepowtarzalną
            przestrzeń
          </p>
        </div>
      </Hero>
      <Office />
      <Projects />
      <About />
      <Appointment />
      <Contact />
    </>
  );
}
