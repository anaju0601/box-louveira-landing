import { motion } from "motion/react";
import { transformations } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function Transformations() {
  return (
    <section className="bg-[#050505] px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Transformações"
          title="Resultados que aparecem fora do treino."
          description="Este bloco esta pronto para receber fotos reais do marketing: evolucao fisica, performance e consistencia."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {transformations.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative min-h-[260px] overflow-hidden rounded-md border border-white/10 bg-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:min-h-[340px]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--green-logo)] sm:text-xs sm:tracking-[0.22em]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-bold text-white sm:text-base">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
