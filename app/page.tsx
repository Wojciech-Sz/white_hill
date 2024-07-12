import About from "@/components/shared/About";
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
    </div>
  );
}
