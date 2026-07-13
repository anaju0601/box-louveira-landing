import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { testimonials } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function TestimonialsVideo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);


  const active = testimonials[activeIndex];
  const nextTestimonial = () => {
    setAutoPlay(false);

    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setAutoPlay(false);

    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
    useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 30000);

      return () => clearInterval(interval);
    }, [autoPlay]);
    useEffect(() => {
      if (!videoRef.current) return;

      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});

      setIsPlaying(true);
    }, [activeIndex]);
  return (
    <section className="bg-[#080808] px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Vozes reais"
          title="O que muda quando você entra para o ritmo."
          description="Cada história representa uma conquista real. Descubra como nossos alunos transformaram sua rotina, superaram desafios e encontraram uma nova forma de viver o movimento."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-center gap-4 pt-3">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.blockquote
                  key={testimonial.text}
                  layout
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoPlay(false);
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.68,
                    scale: isActive ? 1 : 0.995,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className={`cursor-pointer rounded-md border-l-2 p-6 transition-all duration-700 sm:p-5 ${
                    isActive
                      ? "border-[var(--green-logo)] bg-white/[0.055] shadow-[0_0_30px_rgba(61,255,133,0.06)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.035]"
                  }`}
                >
                  <p className="text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                    "{testimonial.text}"
                  </p>

                  <footer
                    className={`mt-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-700 sm:text-xs ${
                      isActive
                        ? "text-[var(--green-logo)]"
                        : "text-white/45"
                    }`}
                  >
                    {testimonial.name}
                  </footer>
                </motion.blockquote>
              );
            })}
          </div>
          <div className="relative flex items-start pt-2 justify-center">
            <div className="relative">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Depoimento anterior"
                className="absolute left-[calc(50%-205px)] top-[382px] z-30 text-white/35 transition-all duration-500 hover:scale-110 hover:text-[var(--green-logo)]"
              >
                <ChevronLeft size={26} strokeWidth={1.8} />
              </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0.65, scale: 0.995 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-10 h-[660px] w-[370px] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950 shadow-[0_12px_35px_rgba(0,0,0,.22)]"
            >

            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 mb-4 text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
                {active.title}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/35">
                {active.role}
              </p>
            </motion.div>

            <div className="px-2 pb-2">
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                >
                  <div className="rounded-full border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                    <Play
                      size={34}
                      className="ml-1 fill-white text-white"
                    />
                  </div>
                </motion.div>
              )}
              <AnimatePresence mode="wait">
                <motion.video
                  onClick={toggleVideo}
                  ref={videoRef}
                  key={active.video}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="h-[560px] w-full rounded-[26px] object-cover"
                >
                  <source src={active.video} type="video/mp4" />
                </motion.video>
              </AnimatePresence>
            </div>            
              </motion.div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Próximo depoimento"
                className="absolute right-[calc(50%-205px)] top-[382px] z-30 text-white/35 transition-all duration-500 hover:scale-110 hover:text-[var(--green-logo)]"
              >
                <ChevronRight size={26} strokeWidth={1.8} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}