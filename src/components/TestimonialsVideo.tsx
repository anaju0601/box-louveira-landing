import { Play } from "lucide-react";
import { testimonials } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function TestimonialsVideo() {
  return (
    <section className="bg-[#080808] px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Vozes reais"
          title="O que muda quando você entra para o ritmo."
          description="Layout atualizado para receber comentérios dos alunos ao lado do video principal produzido pelo marketing."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.text}
                className="rounded-md border-l-2 border-[var(--green-logo)] bg-white/[0.025] p-4 sm:p-5"
              >
                <p className="text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                  "{testimonial.text}"
                </p>
                <footer className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--green-logo)] sm:text-xs">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-md border border-white/10 bg-black sm:min-h-[360px] lg:min-h-[470px]">
            <img
              src="https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=1400&q=85"
              alt="Video principal da Box Louveira"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--green-glow),transparent_38%),linear-gradient(180deg,transparent,rgba(0,0,0,0.84))]" />
            <div className="absolute inset-0 grid place-items-center">
              <button
                type="button"
                aria-label="Reproduzir video"
                className="grid size-14 place-items-center rounded-md border border-[var(--green-cta)]/45 bg-[var(--green-cta)]/15 text-[var(--green-cta)] backdrop-blur transition duration-300 hover:scale-105 hover:bg-[var(--green-cta)] hover:text-white sm:size-16"
              >
                <Play className="ml-1 size-7 fill-current" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 max-w-xl p-5 sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--green-logo)] sm:text-xs sm:tracking-[0.24em]">
                Video oficial
              </p>
              <h3 className="mt-2 text-lg font-black uppercase leading-tight text-white sm:text-3xl">
                Aqui entra o filme principal da campanha.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
