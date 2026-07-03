import { Benefits } from "./components/Benefits";
import { EmotionalBlock } from "./components/EmotionalBlock";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Numbers } from "./components/Numbers";
import { TestimonialsVideo } from "./components/TestimonialsVideo";
import { Transformations } from "./components/Transformations";
import { Schedule } from "./components/Schedule";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Hero />
      <Transformations />
      <Benefits />
      <Schedule />
      <Method />
      <Numbers />
      <TestimonialsVideo />
      <EmotionalBlock />
      <FinalCta />
      <Footer />
    </main>
  );
}
