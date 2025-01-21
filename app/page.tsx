import Hero from "@/components/Home/Hero";
import Intro from "@/components/Home/Intro";
import Why from "@/components/Home/Why";
 

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Intro />
      <Why />
    </div>
  );
}
