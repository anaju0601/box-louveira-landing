import { MoveRight } from "lucide-react";
import { links } from "../data/site";

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="bg-[#050505] px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--green-logo)] sm:mb-5 sm:text-xs sm:tracking-[0.24em]">
          Próximo passo
        </p>
        <h2 className="text-balance text-[2.15rem] font-black uppercase leading-[0.95] text-white sm:text-6xl">
          Se você quer mudar, entre no ambiente certo.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 sm:mt-6 sm:text-lg sm:leading-8">
          A landing page termina aqui. A decisão continua na página oficial de
          planos da Box Louveira.
        </p>
        <a
          href={links.plans}
          className="cta-green-text mt-9 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[var(--green-cta)] px-8 py-5 text-sm font-black uppercase tracking-[0.14em] !text-black shadow-[0_0_34px_var(--green-glow)] transition-all duration-300 hover:bg-white hover:!text-[#45D845] sm:mt-10 sm:w-auto"
        >
          Conhecer os Planos
          <MoveRight className="size-5" />
        </a>
      </div>
    </section>
  );
}
