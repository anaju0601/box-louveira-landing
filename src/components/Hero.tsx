import { MessageCircle, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { links } from "../data/site";
import { getRandomHeroImage } from "../utils/heroImage";
import { Logo } from "./Logo";

export function Hero() {
  const heroImage = useMemo(() => getRandomHeroImage(), []);

  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] items-stretch overflow-hidden sm:min-h-[85svh]"
    >
      <img
        src={heroImage}
        alt="Treino de alta intensidade em ambiente escuro"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,var(--green-glow),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(110,242,107,0.14),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-5 sm:px-8 sm:py-6 lg:px-10">
        <header className="flex items-center justify-between">
          <Logo />
          <a
            href={links.plans}
            className="hidden rounded-md border border-white/18 bg-transparent px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[var(--green-cta)] hover:bg-[var(--green-cta)] hover:text-white sm:inline-flex"
          >
            Planos
          </a>
        </header>

        <div className="flex flex-1 items-center pb-6 pt-8 sm:pb-8 sm:pt-12 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="mb-4 inline-flex max-w-full rounded-md border border-[var(--green-logo)]/35 bg-[var(--green-logo)]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--green-logo)] sm:mb-5 sm:px-4 sm:text-[11px] sm:tracking-[0.24em]">
              Disciplina. Performance. Transformação.
            </p>
            <h1 className="max-w-4xl text-[2.2rem] font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
              <span className="block">Sua transformação começa</span>

              <span className="mt-3 block">
                quando você decide
              </span>

              <span className="mt-3 block">
                não desistir.
              </span>
            </h1>            
            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-white/72 sm:mt-6 sm:max-w-2xl sm:text-base">
              Uma experiência de treino intensa, técnica e coletiva para quem
              quer construir corpo, mente e constância.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href={links.plans}
                className="cta-green-text inline-flex w-full items-center justify-center gap-3 rounded-md bg-[var(--green-cta)] px-5 py-3.5 text-sm font-black uppercase tracking-[0.12em] !text-black shadow-[0_0_34px_var(--green-glow)] transition-all duration-300 hover:bg-white hover:!text-[#45D845] sm:w-auto sm:px-7"
              >
                Conhecer os Planos
                <MoveRight className="size-5" />
              </a>
              <a
                href={links.whatsapp}
                className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/22 bg-transparent px-5 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition duration-300 hover:border-[var(--green-cta)] hover:bg-[var(--green-cta)] hover:text-white sm:w-auto sm:px-7"
              >
                <MessageCircle className="size-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
