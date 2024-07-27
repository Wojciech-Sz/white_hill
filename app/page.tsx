import About from "@/components/shared/About";
import Appointment from "@/components/shared/Appointment";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Office from "@/components/shared/Office";
import Projects from "@/components/shared/Projects";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <Hero />
      <Office />
      <Projects />
      <About />
      <Appointment />
      <Contact />
    </div>
  );
}
