import { motion } from "motion/react";
import { benefits } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function Benefits() {
  return (
    <section className="bg-[#080808] px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Beneficios"
          title="O que sustenta a sua evoluçãoo."
          description="Conteúdo preparado para ajustes finais do marketing, mantendo uma estrutura forte de conversão e leitura rápida."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-md border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--green-cta)]/45 hover:bg-[var(--green-cta)]/[0.045] sm:p-6"
              >
                <div className="mb-6 grid size-11 place-items-center rounded-md border border-[var(--green-logo)]/25 bg-[var(--green-logo)]/10 sm:mb-8 sm:size-12">
                  <Icon className="size-6 text-[var(--green-logo)]" />
                </div>
                <h3 className="text-lg font-black uppercase leading-tight text-white sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {benefit.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
